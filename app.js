const http = require('http')
const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

process.on('SIGINT', function() {
  console.log("Caught interrupt signal");
  process.exit();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});