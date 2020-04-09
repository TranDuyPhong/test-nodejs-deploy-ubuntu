const http = require('http');

const HOST = '192.168.1.185';
const PORT = 9999;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hello World');
});

server.listen(PORT, '192.168.1.185');

console.log(`Server is running on ${HOST}:${PORT}`);