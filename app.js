const http = require('http');
const net = require('net');

// Ports from environment variables
const httpPort = process.env.HTTP_PORT || 3000;
const secondaryHttpPort = process.env.SECONDARY_HTTP_PORT || 3001;
const tcpPort = process.env.TCP_PORT || 4000;

// Primary HTTP server
const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\nI\'m: ' + process.env.APP + '\nBuild:' + process.env.BUILD + '\nRelease: ' + process.env.RELEASE + '\nrunning on: ' + process.env.RACK);
  console.log('HTTP request received on primary port');
});

httpServer.listen(httpPort, () => {
  console.log(`HTTP server running at http://localhost:${httpPort}/`);
});

// Secondary HTTP server
const secondaryHttpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World AGAIN from Secondary Port\n');
  console.log('HTTP request received on secondary port');
});

secondaryHttpServer.listen(secondaryHttpPort, () => {
  console.log(`Secondary HTTP server running at http://localhost:${secondaryHttpPort}/`);
});

// TCP server
const tcpServer = net.createServer((socket) => {
  console.log('TCP connection established');

  socket.on('data', (data) => {
    console.log(`Received data: ${data.toString()}`);
    socket.write(`Echo: ${data}\n`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

}).on('error', (err) => {
  console.error(err);
});

tcpServer.listen(tcpPort, () => {
  console.log(`TCP server running on port ${tcpPort}`);
});
