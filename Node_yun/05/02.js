var express = require('express'),
    app = express(),
    db = require('./model/db'),
    assert = require('assert');

app.get('/', (req, res) => {
    var date = new Date();
    db.insertOne('login',{
        "date": date.getTime(),
        "num": parseInt(Math.random()*100 + 10)
    }, (err, result) => {
        if(err){
            console.log('插入失败');
            return;
        }
        res.send('ok');
    });
});

app.get('/find', (req, res) => {
    db.find('login',{"num": {$gt: 50}}, (err, result) => {
        if(err){
            console.log('插入失败');
            return;
        }
        res.send(result);
    });
});
app.listen('3000');
console.log('server in http://127.0.0.1:3000');
