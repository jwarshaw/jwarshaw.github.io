const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 3001));
app.use('/', express.static(path.join(__dirname, 'client/src/components')));
app.use(express.static(path.resolve(__dirname, 'build')));
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

app.post('/contact', (req, res) => {
	console.log('hit server');
  res.send('POST request to the contact page');
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
}
