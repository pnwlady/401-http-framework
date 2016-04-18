var path = require('path');

var contentHead = {
  txt: 'text/plain',
  html: 'text/html',
  json: 'application/json',
  css: 'application/css',
  js: 'application/js'
};

module.exports = function getHeadType(file) {
  var ext = path.extname(file);
  return { 'Content-Type': contentHead[ext.slice(1)] };
};
