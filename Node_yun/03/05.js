var express = require('express'),
    app = express();

app.get("/:id",(req, res) => {
    res.send('1');
});

app.get("/100",(req, res) => {
    res.send('1');
});

app.listen(3000);




