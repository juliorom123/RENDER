const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.sendFile(path.resolve(index.hml))
})


app.listen(3000)