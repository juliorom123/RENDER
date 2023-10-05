const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"))
})


app.listen(3000)