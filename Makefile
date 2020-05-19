# The default target must be at the top
.DEFAULT_GOAL := test

install:
	npm install

update-deps:
	ncu -u

lint:
	./node_modules/.bin/xo

unit:
	./node_modules/.bin/ava

test: lint unit

