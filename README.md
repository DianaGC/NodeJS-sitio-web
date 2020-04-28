# NodeJS-sitio-web
### Learn NodeJs

### Create web site in Node

Install 

nodemon._ Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm
```npm install -g nodemon```

Nginx

nginx -s stop kill the process 

/usr/local/etc/nginx/nginx.conf

config nginx.conf

Creating a proxy to Node ==> nginx ==> server

 ```
 location / {
            root   html;
            index  index.html index.htm;

            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For
            $proxy_add_x_forwarded_for;
            proxy_set_header X-NginX-Proxt true;

            proxy_pass      http://localhost:3000/;
            proxy_redirect off;
        }
```

