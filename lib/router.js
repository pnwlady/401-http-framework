var fs = require('fs');
var filePath = require('path');
var getContentType = require(__dirname + '/content-type.js');

module.exports = exports = new Router();
function Router() {

  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
}

(function() {
  this.get = function(route, cbinput) {
    function getCallback(req, res) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(cbinput);
      res.end();
    }

    var callback = getCallback;

    if (typeof cbinput === 'function') {
      callback = cbinput;
    }

    this.routes['GET'][route] = callback;
  };

  this.getStatic = function(file, route, cb) {
    var filePathCb = function filePathCb(req, res) {
      var readStream = fs.createReadStream(file);
      var body = '';
      readStream.on('data', (chunk) => {
        body += chunk.toString();
      });
      readStream.on('end', function() {
        res.writeHead(200, { 'Content-Type': getContentType(file) });
        res.write(body);
        res.end();
      });
    };
    route = route || '/' + filePath.basename(file);
    var callback = cb || filePathCb;
    this.routes['GET'][route] = callback;
  };

  this.post = function(route, cb) {
    function postCallback(req, res) {
      var concatData = '';
      req.on('data', (data) => {
        concatData += data.toString();
      });
      req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(concatData);
        res.end();
      });
    }
    var callback = cb || postCallback;

    this.routes['POST'][route] = callback;
  };

  this.error = function(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Error. Page not found.');
    res.end();
  };

  this.route = function(req, res) {
    (this.routes[req.method][req.url] || this.error)(req, res);
  };
}).call(Router.prototype);
