var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/v1/url', (req, res) => {
  res.send({
    "data": {
      "url": "http://so.chaomengdata.com/x/so"
    },
    "meta": {
      "message": "OK",
      "code": 200
    }
  })
})

app.listen(3000);