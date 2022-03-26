var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'scrutinizeknight@gmail.com',
    pass: 'ni.liamg@thginkeziniturcs'
  }
});

var mailOptions = {
  from: 'scrutinizeknight@gmail.com',
  to: 'xenox96888@jo6s.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info)=>{
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 