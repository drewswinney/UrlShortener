.PHONY:	run-server

# `make setup` will be used after cloning or downloading to fulfill
# dependencies, and setup the the project in an initial state.
# This is where you might download rubygems, node_modules, packages,
# compile code, build container images, initialize a database,
# anything else that needs to happen before your server is started
# for the first time

setup:
	brew install yarn
	yarn --cwd client install
	sh dotnet-install.sh

cleanup:	
	dotnet clean UrlShortener
 
restore:	
	dotnet restore UrlShortener
 
build:	
	dotnet build UrlShortener

# `make run-server` will be used after `make setup` in order to start
# the webpack server process that runs on port 3000. 
run-client:	
	yarn --cwd client start

# `make run-server` will be used after `make client` in order to start
# an https server process that listens on port 5001. 
run-server:	
	${cleanup}
	${restore}
	${build}
	dotnet run -p UrlShortener/UrlShortener.csproj

# `make test` will be used after `make setup` in order to run
# your test suite.
test:
	yarn --cwd client test
	dotnet test UrlShortener.Tests/UrlShortener.Tests.csproj