#=====================================================================
# make site
#=====================================================================

#=====================================================================
# Setup
#=====================================================================
# CORE MACROS
ifeq ($(OS), Windows_NT)
CD=cd
else
CD=cd -P "$(CURDIR)"; cd   # This handles the case when CURDIR is a softlink
endif
CP=cp
MAKE=make
MV=mv
RM=rm -f
MKDIR=mkdir -p
RMDIR=$(RM) -r
ASPELL=aspell
SORT=sort
R_SCRIPT = Rscript

# Capabilities
HAS_ASPELL := $(shell $(R_SCRIPT) -e "cat(Sys.getenv('HAS_ASPELL', !is.na(utils:::aspell_find_program('aspell'))))")
HTML_FILES := $(wildcard html/*.html html/*/*.html html/*/*/*.html)


#=====================================================================
# Configs
#=====================================================================


#=====================================================================
# Global
#=====================================================================
all: html


#=====================================================================
# Pages
#=====================================================================
build:
	$(R_SCRIPT) "R/build"


spell:
	@echo $(HTML_FILES)
	$(RM) spell-words.txt
	for file in $(HTML_FILES); do \
	  echo file=$$file; \
          $(ASPELL) --personal=./.aspell.en_US.pws --mode=html list < $$file >> spell-words.txt; \
	done
	cat spell-words.txt | sort -u

check_links:
	wget --spider -o wget.log -e robots=off -w 1 -r -p http://cbc.ucsf.edu/index.html
	grep -B 2 '404' wget.log

check_html:
	$(R_SCRIPT) "R/w3c-html"

check_css:
	$(R_SCRIPT) -e "browseURL('http://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fcbc.ucsf.edu')"



#=====================================================================
# Publish (=go live!)
#=====================================================================
# Requires:
# 1. That WEBSITE_PATH points to a <host>:<abs-path>/ webserver path
# 2. That authentication for <host> is setup in ~/.ssh/config
WEBSITE_PATH=cbc.ucsf.edu:www-cbc

beta:
	@echo WEBSITE_PATH=$(WEBSITE_PATH)
	rsync -avvz --exclude '*~' --perms --chmod=ugo+rx --progress html/ $(WEBSITE_PATH)/beta/

publish:
	@echo WEBSITE_PATH=$(WEBSITE_PATH)
	rsync -avvz --exclude '*~' --perms --chmod=ugo+rx --progress html/ $(WEBSITE_PATH)/


#=====================================================================
# Cleanups
#=====================================================================
clean:
	$(RM) -rf html/
