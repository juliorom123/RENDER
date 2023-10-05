const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.sendFile("Proy-001-Taller_Coche/index.html")
})


app.listen(3000)