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


#=====================================================================
# Publish (=go live!)
#=====================================================================
# Requires a 'Host bhgc.org-website' entry in ~/.ssh/config
alpha:
	rsync -avvz --perms --chmod=ugo+rx --progress html/ cbc.ucsf.edu:~/www-cbc/alpha/

publish:
#	rsync -avvz --perms --chmod=ugo+rx --progress html/ cbc.ucsf.edu:~/www-cbc/


#=====================================================================
# Cleanups
#=====================================================================
clean:
	$(RM) -rf html/
