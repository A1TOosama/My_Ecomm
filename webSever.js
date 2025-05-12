const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

var server = http.createServer(function (req, res) {
  var q  = url.parse(req.url, true);

  let filePath = "." + req.url;
  if(filePath === "./") filePath = "./index.html";

  const extname = path.extname(filePath);
  let contentType = "text/html";
  if(extname === '.css') contentType = "text/css";
  if(extname === '.xml') contentType = "text/xml";


  fs.readFile(filePath, function(err, htmlDoc) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('File not found');
      return res.end();
    }

    res.writeHead(200, {'Content-Type': contentType});
    res.write(htmlDoc);
    res.end();
  });  
});

server.listen(4040);