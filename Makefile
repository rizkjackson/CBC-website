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


spell:
	aspell --mode=html list < html/index.html | sort -u
	aspell --mode=html list < html/consultation/index.html | sort -u
	aspell --mode=html list < html/contact/index.html | sort -u
	aspell --mode=html list < html/people/index.html | sort -u
	aspell --mode=html list < html/publications/index.html | sort -u
	aspell --mode=html list < html/sequencing/index.html | sort -u
	aspell --mode=html list < html/software/index.html | sort -u
	aspell --mode=html list < html/stories/index.html | sort -u


#=====================================================================
# Publish (=go live!)
#=====================================================================
# Requires a 'cbc.ucsf.edu' entry in ~/.ssh/config with:
#
#  Host cbc.ucsf.edu
#    User <username on cbc.ucsf.edu> 

publish:
	rsync -avvz --exclude '*~' --perms --chmod=ugo+rx --progress html/ cbc.ucsf.edu:/var/www-cbc/


#=====================================================================
# Cleanups
#=====================================================================
clean:
	$(RM) -rf html/
