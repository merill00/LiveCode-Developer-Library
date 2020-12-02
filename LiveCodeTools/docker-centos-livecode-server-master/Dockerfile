#
# https://downloads.livecode.com/livecode/
#
FROM appsoa/docker-centos-base-java

RUN yum -y install httpd && \
    mkdir -p /usr/local/livecode && cd /usr/local/livecode && \
    wget "http://livecodestatic.com/downloads/livecode/9_0_0/LiveCodeCommunityServer-9_0_0_dp_4-Linux-x86_64.zip" && \
    unzip LiveCodeCommunityServer-9_0_0_dp_4-Linux-x86_64.zip && \
    chmod 755 livecode-community-server

COPY src/httpd.conf /etc/httpd/conf/httpd.conf

EXPOSE 80

COPY /entrypoint.sh /
COPY /entrypoint.d/* /entrypoint.d/
ONBUILD COPY /entrypoint.d/* /entrypoint.d/

ENTRYPOINT ["/entrypoint.sh"]
# ENTRYPOINT ["/usr/sbin/httpd -D NO_DETACH -D FOREGROUND"]