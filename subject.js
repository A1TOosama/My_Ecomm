const http = require('http');

http.createServer(function (req, res) {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{"contactSubject": ["General Enquery", "System Administrator", "Data Analyst", "Cybersecurity Specialist", "Cloud Engineer", "UX/UI Designer", "Other","Nicety"]}');
}).listen(5001, () => {
    console.log("Server is running on http://localhost:5001");
});