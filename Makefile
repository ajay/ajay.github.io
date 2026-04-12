################################################################################

REPO_ROOT := $(shell git rev-parse --show-toplevel)

repo-init:
	@## initialize git submodules
	git submodule sync --recursive
	git submodule update --init --recursive

ifneq ($(MAKECMDGOALS),repo-init)
-include $(REPO_ROOT)/tools/site-common/makefiles/site.mk
endif

################################################################################
