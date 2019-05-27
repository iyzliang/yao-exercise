var express = require('express'),
    app = express();

app.set("view engine", "ejs");

app.get("/",(req, res) => {
    res.render('input');
});

app.post('/',(req, res) => {
    console.log(req);
    res.send('成功');
});

app.listen(3000);




