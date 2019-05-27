var express = require('express'),
    app = express(),
    MongoClient = require('mongodb').MongoClient;

app.get('/',(req, res) => {
    var url = 'mongodb://localhost:27017/test';
    MongoClient.connect(url, (err, client) => {
        if(err){
            console.log('数据库连接失败');
            return;
        }
        console.log('数据连接成功');
        var date = new Date();
        var db = client.db("test");
        db.collection('login').insertOne({
            "date": date.getTime(),
            "num": parseInt(Math.random()*100 + 10)
        }, (err, result) => {
            if(err){
                console.log('插入失败');
                return;
            }
            res.send('ok');
            client.close();
        });
    });
}).listen('3000');
console.log('server in http://127.0.0.1:3000');
