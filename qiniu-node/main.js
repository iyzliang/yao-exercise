var express = require('express');
var app = express();
var qiniu = require('qiniu');

app.get('/getUploadToken', (req, res) => {
  var accessKey = 'axiqqE0fHAucoxsDobP3vUUtEwn15ooZwr2XXD1F';
  var secretKey = 'hV9mxE7ASLkTSqcYgupEve00_rm5ymB-B0BUD2Iq';
  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  var options = {
    scope: 'yuanyue',
  };
  var putPolicy = new qiniu.rs.PutPolicy(options);
  var uploadToken=putPolicy.uploadToken(mac);
  res.send(uploadToken);
})

app.listen(3002, () => {
  console.log('http://127.0.0.1:3002/getUploadToken')
});

