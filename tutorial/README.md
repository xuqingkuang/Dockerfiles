# Tutorial

This is a tutorial of how to use Dockerfile to build customized Image, and how
to use Docker Compose to start app and services.

## Build customized Image and test

    $ docker build -t node-customized .
    $ docker run -v $(pwd):/code -p 80:8000 -it node-customized babel-node /code/server.js

## Start app and services

The configurated a mysql service and app connected to mysql to output the date

    $ docker-compose up

## Test

Navigate to Docker host with any browser to see the actions.
