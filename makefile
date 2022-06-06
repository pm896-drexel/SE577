SHELL := /bin/bash

.PHONY: help
help:
	@echo "Usage make <TARGET>"
	@echo ""
	@echo "  Targets:"
	@echo "	   docker-build-web		Containerize the server"
	@echo "	   docker-run-web			Run server container"

.PHONY: docker-build-web
docker-build-web:
	docker build --rm=true -t quasar_spa .
	docker image prune -f

.PHONY: docker-run-web
docker-run-web:
	docker run --rm -p 8080:8080 quasar_spa

