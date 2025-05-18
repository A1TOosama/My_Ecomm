var http = require('http');

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'Get,Post')
    res.setHeader('Access-Control-Allow-Origin', '*')

  res.write(200, {'Content-Type' : 'application/json'}); 
  res.end('{"contentSubject" : ["General Enquery" , "Schedules" ," Instructer" , "Prices" , "Other"]}'); 
}).listen(5000); 