var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);

function handler (req, res) {
  console.log('req', req.url);
  let path = req.url;
  if (path === '/'){
    path = '/demo/index.html'
  }
  fs.readFile(__dirname + path,
    function (err, data) {
      if (err) {
        res.writeHead(404);
        return res.end('File not found');
      }

      res.writeHead(200);
      res.end(data);
    });
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});