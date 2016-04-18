const frame = require(__dirname + '/../test/test');

frame.get('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({'msg': 'get test'}));
  res.end();
});

frame.post('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({'msg': 'post test'}));
  res.end();
});

frame.post('/', (req, res) => {
  frame.data(req, (data) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();
  });
});

frame.listen(3000, () => {
  console.log('Server is up on port 3000');
});

module.exports = frame.server;
