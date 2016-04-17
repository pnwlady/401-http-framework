var stc = require('sludgy-trucker-coffee');
const fs = require('fs');

stc.server.listen(8000);
stc.router.get('/', 'Home Sweet Home');
stc.router.get('/index', 'Hello World');
stc.router.getStatic('./public/index.html', '/rest');
stc.router.get('/function', function() { console.log('This is a function.'); });
stc.router.post('/posturl');


// stc.router.post('/posturl', function(req, res) {
//    res.writeHead(200, { 'Content-Type': 'application/json' });
//     req.on('data', (data) => {
//       var path = 'data/' + Date() + '.json';
//       res.write(data);
//       fs.writeFile(path, data, (err) => {
//         if (err) return 'Error';
//         console.log(Date() + ' file saved.');
//         return res.end();
//       });
//     });
// });
