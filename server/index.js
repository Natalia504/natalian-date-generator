const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { getThings } = require('./controllers/getThings');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

app.post('/api/get-things', getThings);

// standardize error and data response to front end
app.use('*', (req, res) => {
  if (res.err) res.status(500).send({ error: res.err });
  else res.send({ data: res.data });
});

const port = process.env.PORT || 8080;

app.listen(port);

console.log('Server listening on port ', port);

module.exports = app;
