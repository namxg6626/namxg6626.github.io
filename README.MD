## Welcome!

## Some tips: 
 ### *3 ways to force disable caching webpage (probably work)*
   1. in `<head>` tag, add these code below
   ```HTML
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />  
   ```
   2. add .htaccess file in your root directory with these code below
   ```.htaccess
   # DISABLE CACHING
   <IfModule mod_headers.c>
       Header set Cache-Control "no-cache, no-store, must-revalidate"
       Header set Pragma "no-cache"
       Header set Expires 0
   </IfModule>

   <FilesMatch "\.(css|flv|gif|htm|html|ico|jpe|jpeg|jpg|js|mp3|mp4|png|pdf|swf|txt)$">
       <IfModule mod_expires.c>
           ExpiresActive Off
       </IfModule>
       <IfModule mod_headers.c>
           FileETag None
           Header unset ETag
           Header unset Pragma
           Header unset Cache-Control
           Header unset Last-Modified
           Header set Pragma "no-cache"
           Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
           Header set Expires "Thu, 1 Jan 1970 00:00:00 GMT"
       </IfModule>
   </FilesMatch>
   ```
   3. Open DevTools (F12) in chrome, press disable cache in network tab. Or simply, combine Ctrl + F5
