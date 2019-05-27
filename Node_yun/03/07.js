var express = require('express'),
    app = express();

app.use('/', (req, res, next) => {
    console.log(new Date());
});

app.use('/admin',(req, res) => {
    res.write(req.originalUrl + "\n");
    res.write(req.baseUrl + "\n");
    res.write(req.path + "\n");
    res.send();
});

app.listen(3000);