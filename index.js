const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.send('Concha tu madre')
})


app.listen(3000)