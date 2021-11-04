const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
  res.status(200).send('Test route ok');
});

app.all('*', (req, res, next) => {
  next();
});

module.exports = app;
