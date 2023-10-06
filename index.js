const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  //res.send('Hello World')
  res.sendFile(path.resolve(__dirname, 'index.html'));
})


app.listen(3000);