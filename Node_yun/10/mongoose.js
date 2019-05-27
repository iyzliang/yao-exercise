const mongoose = require('mongoose');
mongoose.connect('mongodb://yzliang:y548776178zl@127.0.0.1:27017/lianxi?authSource=admin');

const Man = mongoose.model('Man', {name: String});

const yzliang = new Man({name: 'dongyu'});
yzliang.save().then(() => {
    console.log('ok');
})