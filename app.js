var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    switch (req.url) {
        case '/home':
            console.log(req.url);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(__dirname + '/index.html').pipe(res)
            break
        case '/contact':
            console.log(req.url);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('contact');
            break
        case '/api/contact':
            console.log(req.url);
            var items = [{name: 'mahadi', mob: '01717677540'}];
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(items));
            break
        default:
            console.log(req.url);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('default');
    }
});

server.listen(3030, '127.0.0.1');
console.log('Create Won Server');
