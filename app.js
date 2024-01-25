const http = require('http');


const port = process.env.PORT;
const secondaryPort = process.env.SECONDARY_PORT;

// Primary server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\nI\'m: ' + process.env.APP + '\nBuild:' + process.env.BUILD + '\nRelease: ' + process.env.RELEASE + '\nrunning on: ' + process.env.RACK);
  console.log('Request received on primary port');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Secondary server
const secondaryServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is the secondary server response.');
  console.log('Request received on secondary port');
});

secondaryServer.listen(secondaryPort, () => {
  console.log(`Secondary server running at http://localhost:${secondaryPort}/`);
});
