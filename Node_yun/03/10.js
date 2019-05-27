var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
 
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req, res) => {
    res.render('input');

});

app.post('/', (req, res) => {
    res.send(req.body);
});

app.listen(3000);