const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      db = require('./model/db'),
      ObjectID = require('mongodb').ObjectID;

app.use(express.static('./views'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/addmsg', (req, res) => {
    var body = req.body;
    db.insert('userDB', 'msg', [body], (err, result) => {
        if(err){
            res.send(err);
        }
        res.send({"static": "ok"});
    })
});

app.get('/api/getmsg', (req, res) => {
    db.find('userDB', 'msg', (err, result) => {
        if(err){
            res.send(err);
        }
        res.send(result);
    })
})

app.delete('/api/delmsg', (req, res) => {
    var body = req.body;
    db.remove('userDB', 'msg', {"_id": new ObjectID(body._id)}, (err, result) => {
        if(err){
            res.send(err);
        }
        res.send({"static": "ok"});
    })
})

app.listen(3000);
