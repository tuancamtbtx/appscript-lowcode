-include .env


.PHONY: fmt deploy test

fmt:
	npm run format

deploy:
	npm run deploy

test:
	npm run test

build:
	npm run build