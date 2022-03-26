
//create an upload form
  // var http = require('http');
  // http.createServer(function (req, res) {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  //   res.write('<input type="file" name="filetoupload"><br>');
  //   res.write('<input type="submit">');
  //   res.write('</form>');
  //   return res.end();
  // }).listen(8080); 

//parse the uploaded file
  // var http = require('http');
  // var formidable = require('formidable');
  // http.createServer(function (req, res) {
  //   if (req.url == '/fileupload') {
  //     var form = new formidable.IncomingForm();
  //     form.parse(req, function (err, fields, files) {
  //       res.write('File uploaded');
  //       res.end();
  //     });
  //   } else {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  //     res.write('<input type="file" name="filetoupload"><br>');
  //     res.write('<input type="submit">');
  //     res.write('</form>');
  //     return res.end();
  //   }
  // }).listen(8080); 

//SAVE THE FILE
  const http = require('http');
  const formidable = require('formidable');
  const fs = require('fs');
  const mv = require('mv')

  http.createServer((req, res) =>{
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) =>{
        var oldpath = files.filetoupload.filepath;
        var newpath = 'D:/code/nodejs/js tutorial/nodejs_dev/uploadFile/' + files.filetoupload.originalFilename;
        mv(oldpath, newpath, (err)=>{
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
  });
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(8080,console.log('Server listening on http://localhost:8080/ ...')); 


