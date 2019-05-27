const mongoose = require('mongoose');
// mongoose 链接
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/NodeJS'); 

// 链接错误
db.on('error',(error) => {
    console.log(error);
});

// 连接成功
db.once('opne',() => {
    console.log('连接数据库成功');
});

module.exports = db;