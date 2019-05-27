var express = require('express'),
    fs = require('fs'),
    app = express();

app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
    fs.readFile('./01.js',(err, data) => {
        if(err){
            throw err;
        }
        console.log(data.toString());
        res.set('Center-type', 'application/javascript')
        res.send(data.toString());
    })
});

app.use((req, res) => {
    res.send('失败');
});

app.listen(3000);
