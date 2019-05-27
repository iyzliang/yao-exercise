var express = require('express'),
    fs = require('fs'),
    app = express();

app.use(callbackFn);

app.listen(3000);

function callbackFn (req, res, next) {
    var filePath = req.originalUrl;

    fs.readFile('./public/' + filePath, (err, data) => {
        if(err){
            next();
        }
        res.end(data);
    });
}