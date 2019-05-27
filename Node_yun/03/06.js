var express = require('express'),
    app = express();

app.get("/:id",(req, res, next) => {
    if(req.params['id'] == '100'){
        next();
    }else{
        res.send('1');
    }
});

app.get("/100",(req, res) => {
    res.send('2');
});

app.listen(3000);