SHELL := /bin/bash

.PHONY: help
help:
	@echo "Usage make <TARGET>"
	@echo ""
	@echo "  Targets:"
	@echo "	   docker-build		Containerize the server"
	@echo "	   docker-run			Run server container"

.PHONY: docker-build
docker-build:
	docker build --rm=true -t github_repos_yml .
	docker image prune -f

.PHONY: docker-run
docker-run:
	docker run --rm -p 4081:4081 github_repos_yml

