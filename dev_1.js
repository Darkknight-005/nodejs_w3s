const fs = require('fs');
const http = require('http');
const url = require('url')
const port = 8080
http.createServer((req,res)=>{
    //If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type
    res.writeHead(200, {'Content-Type':'Text/html'});
    // this the spliting the of query
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(port);