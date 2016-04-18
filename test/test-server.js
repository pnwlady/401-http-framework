const httpframe = require(__dirname + '/../index');

httpframe.get('/test', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({'msg': 'get test'}));
  res.end();
});

httpframe.post('/test', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({'msg': 'post test'}));
  res.end();
});

httpframe.post('/', (req, res) => {
  httpframe.data(req, (data) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();
  });
});

httpframe.listen(3000, () => {
  console.log('Server is up on port 3000');
});

module.exports = httpframe.server;
