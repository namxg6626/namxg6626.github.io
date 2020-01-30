## Disable caching in apache-xampp
- in httpd.conf, add the code below: 
```
EnableMMAP off
EnableSendfile off
```