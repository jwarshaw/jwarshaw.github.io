const express = require('express');
const path = require('path');

// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');

// dotenv.config({ silent: true});

// const user = process.env.EMAIL_USER;
// const pass = process.env.EMAIL_PASS;
// const host = process.env.EMAIL_HOST;
// const port = process.env.EMAIL_PORT;
// const clientId = process.env.CLIENT_ID;
// const clientSecret = process.env.CLIENT_SECRET;
// const refreshToken = process.env.REFRESH_TOKEN;
// const accessToken = process.env.ACCESS_TOKEN;

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// app.post('/api/contact', (req, res, next) => {
// 	console.log('hit server');
// 	console.log('req.body...');
//   console.log(req.body);

//   var smtpConfig = {
//     host: host,
//     port: port,
//     secure: true,
//     auth: {
//       XOAuth2: {
//         user: 'jonathan.warshaw@gmail.com',
//         clientId: clientId,
//         clientSecret: clientSecret,
//         refreshToken: refreshToken,
//         accessToken: accessToken
//       }
//     }
//   };

//   var transporter = nodemailer.createTransport(smtpConfig);
  
//   var mailOptions = {
//     from: req.body.email,
//     to: 'jonathan.warshaw@gmail.com',
//     subject: 'Website contact form',
//     text: req.body.message
//   };

//   transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//     	console.log(error);
//       return false;
//     }else{
//       console.log('Message sent: ' + info.response);
//       return true;
//     };
//   });
// })

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
})
