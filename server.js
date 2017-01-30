const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.post('/api/contact', (req, res) => {
	console.log('hit server');
  res.send('POST request to the contact page');
})

app.listen(app.get('port'), () => {
  console.log('Find the server at: http://localhost:${app.get('port')}/');
})
