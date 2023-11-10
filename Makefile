# The default target must be at the top
.DEFAULT_GOAL := test

install:
	npm install

install-ci:
	npm ci

update-deps:
	ncu -u

unit-test:
	./node_modules/.bin/ava

