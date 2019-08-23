var express = require('express');
var app = express();

app.get('/', (req, res) =>
  res.send('Hello from Chronos v0')
);

app.listen(80, () => {
  console.log('Server init');
});
