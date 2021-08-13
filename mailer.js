var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'richadadtranngoclam@gmail.com',
      pass: '01699959802'
    }
  });
  
  var mailOptions = {
    from: 'richadadtranngoclam@gmail.com',
    to: 'tranngoclamjapan@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });