var express = require('express');
var app = express();

app.get('/', (req, res) =>
  res.send('Hello from Chronos v1')
);

app.listen(80, () => {
  console.log('Server init');
});
