#!/bin/bash

docker rm -f livecode-server

docker run -id   \
                -v "$PWD"/public_html:/var/www/html \
                -p 8888:80 \
                --name livecode-server \
                appsoa/docker-centos-livecode-server

