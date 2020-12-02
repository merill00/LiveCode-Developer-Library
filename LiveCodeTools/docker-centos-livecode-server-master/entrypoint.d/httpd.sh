#!/bin/bash

/usr/sbin/httpd -D NO_DETACH -D FOREGROUND

tail -f /var/log/httpd/*