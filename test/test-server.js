const httpframe = require(__dirname + '/../index');

httpframe.get('/test', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  //res.write & res.end() shortcut with res.wrend
  res.wrend(JSON.stringify({'msg': 'get test'}));
});

httpframe.post('/test', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.wrend(JSON.stringify({'msg': 'post test'}));
});

httpframe.put('/test', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.wrend(JSON.stringify({'msg': 'put test'}));
});

httpframe.patch('/test', (req. res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.wrend(JSON.stringify({'msg': 'patch test'}));
});

httpframe.delete('/test', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.wrend(JSON.stringify({'msg': 'delete test'}));
});

httpframe.post('/', (req, res) => {
  httpframe.data(req (data) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.wrend(data);
  });
});

httpframe.listen(3000, () => {
  console.log('Server is up on port 3000');
});

module.exports = httpframe.server;
