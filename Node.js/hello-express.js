const express = require('express');

const server = express();

server.all('/', function(req, res) {
    res.send('Hello');
});

server.all('/toto', function(req, res) {
    res.send('Hello Toto !!!');
});

server.listen(8080, function(){
    console.log('Server listening');
});