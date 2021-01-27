const http = require('http');

http.createServer((req, res) => {
    console.log('requested');
    res.write('Hello');
    res.end()
}).listen(5000, ()=> console.log('server up'));