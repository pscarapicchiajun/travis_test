var express = require('express');
var app = express();

app.get('/', (req, res) =>
  res.send('Hello from Chronos v3')
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server init');
});
