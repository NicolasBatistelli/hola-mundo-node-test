const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

// No inicies el servidor aquí directamente
module.exports = app;
