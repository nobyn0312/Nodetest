// server.mjs
import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
  let filePath = path.join('./index.html'); // index.htmlのパス

  // index.htmlを読み込む
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data); // index.htmlの内容をレスポンスとして返す
  });
});

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
