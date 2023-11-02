var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'athul0987@gmail.com',
    pass: 'xmcd kkkn pbkd diji'
  }
});
var mailOptions = {
  from: 'athul0987@gmail.com',
  to: 'shylapr8@gmail.com',
  subject: 'Mail a Friend',
  text: 'Hi, I am sending an email using Node.js'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email has been sent : ' + info.response);
  }
});