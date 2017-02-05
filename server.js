const express = require('express');
const path = require('path');
const bodyParser = require(bodyParser');

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
}

app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.post('/api/contact', (req, res, next) => {
	var helper = require('sendgrid').mail;
	var from_email = new helper.Email(req.body.email);
	var to_email = new helper.Email(process.env.TO_EMAIL);
	var subject = 'You have a website message from ' + req.body.name;
	var content = new helper.Content('text/plain', req.body.message);
	var mail = new helper.Mail(from_email, subject, to_email, content);

	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON(),
	});

	sg.API(request, function(error, response) {
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	});
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
})
