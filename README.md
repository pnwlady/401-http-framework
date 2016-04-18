# waka-flocka-frame

<h2>Waka Flocka Frame HTTP Framework</h2>

A simple http framework to take mundane out of the mundane. Quickly create a basic http server with essential router functions by typing just a few lines of code.

<h2>Features</h2>
<ul>
 <li>HTTP Server</li>
 <li>REST request, response</li>
 <li>GET</li>
 <li>POST</li>
 <li>PUT</li>
 <li>PATCH</li>
 <li>DELETE</li>
 <li>Automatic Content-Type Detection for Headers</li>
</ul>

<h2>Installation</h2>
---------------------
<h2>Initialize your local repository</h2>
  ```
  npm init
  ```

<h2>Install WFF</h2>
```
npm install --save waka-flocka-frame
```

<h2>Then require ('waka-flocka-frame') in your project.</h2>

```var wff = require('waka-flocka-frame');```

--------------------
<h2>Code to quickly set up a http server</h2>
```
var wff = require('waka-flocka-frame');

wff.server.listen([optional port number]);
```
Leaving out the port number will invoke the default port 3000.

<h2>Code to quickly set up a simple route.</h2>
```
wff.router.get('/home', 'a text string');
```
This will return 'a text string' at the '/home' route.<br>
Syntax:
 ```
 wff.router.get( '[your route]', '[a text string]');
 ```
If you want a response other than plain text you MUST use a callback
and response.writeHead.
```
wff.router.get('/home', function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({"msg": "my message"}));
    res.end();
  });
```
<h2>Code to quickly set up a static route.</h2>
```
wff.router.getStatic('someFolder/someText.txt', '/test');
```
This will return the contents of the 'someText.txt' file at the '/test' route.<br>
Syntax:
```
wff.router.getStatic('[your file path]', '[your route]');
```
Parameters are a path to a resource and a route.

<h2>Code to quickly set up a POST route without a callback.</h2>
```
wff.router.post('/myBlog');
```
This will allow you to use a REST client (i.e. 'cURL', 'Postman') to post JSON content to the '/myBlog' route.<br>
Syntax:
```
wff.router.post('[url you are posting to]');
```
Parameter is the route you are posting to.

<h2>Example of a POST route with an optional callback.</h2>
```
wff.router.post('/postUrl', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
   req.on('data', (data) => {
     var path = 'data/' + Date() + '.json';
     res.write(data);
     fs.writeFile(path, data, (err) => {
       if (err) return 'Error';
       console.log(Date() + ' file saved.');
       return res.end();
     });
   });
});
```
