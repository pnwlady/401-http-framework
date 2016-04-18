
Tim Forman [5:27 PM]
added a Markdown (raw) snippet: README.md
# waka-flocka-frame
​
<strong>Waka Flocka Frame http Framework</strong>
​
How to use the WWF framework
Add Comment Click to expand inline 26 lines
Heidi Laursen [6:41 PM]
Tim do you want me to add this to the README.md?

[6:41]
Looks good, btw.

Tim Forman [7:34 PM]
It’s just a tidbit so the file isn’t empty. I’ll have replacement text soon.

Heidi Laursen [7:35 PM]
Thanks! Done :simple_smile:

[7:35]
I’m trying to finish learnyounode. I have 4 left!

[7:36]
I’m sorry, if I complained too much today. I need to work on that.

Tim Forman [7:36 PM]
No worries.

Heidi Laursen [7:36 PM]
Intensive stacking is not for me. But I’ll get through it.

Tim Forman [8:14 PM]
added and commented on a Markdown (raw) snippet: README.md
# waka-flocka-frame
​
<strong>Waka Flocka Frame HTTP Framework</strong>
​
A simple http framework to take mundane out of the mundane. Quickly create a basic http server with essential router functions by typing just a few lines of code.
1 Comment Click to expand inline 72 lines
This should complete (I hope).

Heidi Laursen [8:16 PM]
Sounds good, I’ll add it now. I’ll start testing in the am and be in touch.

[8:18]
Added. Looks really good :simple_smile:

new messages
Tim Forman [10:02 PM]
added and commented on a Markdown (raw) snippet: README.md
# waka-flocka-frame
​
<strong>Waka Flocka Frame HTTP Framework</strong>
​
A simple http framework to take mundane out of the mundane. Quickly create a basic http server with essential router functions by typing just a few lines of code.
​
<h2>Features</h2>
<ul>
 <li>HTTP Server</li>
 <li>REST request, response</li>
 <li>GET</li>
 <li>POST</li>
 <li>Automatic Content-Type Detection for Headers</li>
</ul>
​
<h2>How to use the WFF framework</h2>
-------------
<h3>Installation</h3>
-------------
<h4>Initialize your local repository</h4>
  ```npm init```
​
<h4>Install WFF</h4>
```
npm install --save waka-flocka-frame
```
​
<h4>Then require ('waka-flocka-frame') in your project.</h4>
​
```var wff = require('waka-flocka-frame')```
​
--------------------
Code to quickly set up a http server
```
var wff = require('waka-flocka-frame');
​
wff.server.listen([optional port number]);
```
Leaving out the port number will invoke the default port 3000.
​
<h3>Code to quickly set up a simple route.</h3>
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
wff.router.get('/home', function(){
    res.writeHead(200, {'Content-Type': 'application/json');
    res.write(JSON.stringify({"msg": "my message"}));
    res.end();
  });
```
<h3>Code to quickly set up a static route.</h3>
```
wff.router.getStatic('someFolder/someText.txt', '/test');
```
This will return the contents of the 'someText.txt' file at the '/test' route.<br>
Syntax:
```
wff.router.getStatic('[your file path]', '[your route]');
```
Parameters are a path to a resource and a route.
​
<h3>Code to quickly set up a POST route without a callback.</h3>
```
wff.router.post('/myBlog');
```
This will allow you to use a REST client (i.e. 'cURL', 'Postman') to post JSON content to the '/myBlog' route.<br>
Syntax:
```
wff.router.post('[url you are posting to]');
```
Parameter is the route you are posting to.
​
<h3>Example of a POST route with an optional callback.</h3>
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
