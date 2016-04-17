var router = require(__dirname + '/router.js');
var http = require('http');

module.exports = exports = new Server();

function Server() {
 (function() {
   this.listen = (port) => {
     port = port|| process.env.PORT || 3000;

     http.createServer ((req, res) => {
       router.route(req, res);
     }).listen(port, () => {
       process.stdout.write('The server is listening on port: ' + port);
     });
   };
 }).call(Server.prototype);
}
