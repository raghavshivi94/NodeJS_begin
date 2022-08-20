const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our Home page');
    }
    if(req.url=== '/about'){
        res.end('Here is our short history')
    }
    res.end('<h1>OOPs</h1>')
})

server.listen(5000)