const http = require("http");
const hostname = "localhost";
const port = 5000;

var server = http.createServer(function (req, res) {
    const url = req.url;
    if(url === '/' || url === '/home') {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Home Page.')
    }
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('About Page.')
    }
    else if(url === '/contact') {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Contact Page.')
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('Invalid Request!')
    }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
