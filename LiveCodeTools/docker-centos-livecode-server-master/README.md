# LiveCode Server Environment

<span style="float: left; padding-right: 20px; width: 330px; text-align: right; display: block;">
![livecode](http://i.imgur.com/zfcCDCl.png)
![docker](http://i.imgur.com/rAuZnDH.png)
</span>

LiveCode is a scripting language that is interpreted by a processor (<http://www.livecode.com/>) like php, ruby, etc.

This image combines the "LiveCodeCommunityServer" with the apache web server and is accessible on your local
machine.

## Starting the environment

Use the following command to start the image in docker.
Replace the directory which is linked to the server with the full path to your local source files.

```
docker run -id  -v <your local directory>:/var/www/html \
                -p 80:80 \
                --name livecode-server \
                appsoa/docker-centos-livecode-server
```

The server will launch and go into the background and you can now access the web server by going to http://localhost/test.lc.

You can customize the port which the server is running on by replacing "`-p 80:80`" with "`-p <localport>:80`".