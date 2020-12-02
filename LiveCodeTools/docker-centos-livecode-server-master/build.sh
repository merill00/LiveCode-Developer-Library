#!/bin/bash

# docker build -t appsoa/docker-centos-devops-livecode:latest .
docker build --force-rm --no-cache -t appsoa/docker-centos-livecode-server:latest .
