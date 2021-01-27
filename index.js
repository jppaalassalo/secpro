const http = require('http');

http.createServer((req, res) => {
    if(req.url==='/') {
        console.log('requested', req.url);
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<h1>Hello2</h1>');
        res.end()
    }
}).listen(5000, ()=> console.log('server up'));