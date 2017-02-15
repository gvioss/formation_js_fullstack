const http = require('http');

const server = http.createServer(function(req, res) {
   res.end('Hello');
});

server.listen(8080, function(){
    console.log('Server listening');
});