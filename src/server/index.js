const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'application/json',
  });
  res.end(
    JSON.stringify({
      name: 'Isaac Newton',
    })
  );
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}...`);
});
