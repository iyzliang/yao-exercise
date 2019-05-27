var express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
    var d = req.cookies;
    res.cookie('love', 'dong', {maxAge: 30000, httpOnly: true});
    res.send(d);
});

app.listen(3000);