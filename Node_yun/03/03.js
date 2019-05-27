var express = require('express'),
    app = express();
      
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render('haha', {
        "news": ['Hjhk', '的就爱看', '即可浪']
    });
});

app.listen(3000);