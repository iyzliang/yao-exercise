// 这里分装了对数据库的常用操作
var MongoClient = require('mongodb').MongoClient;

// 连接数据ku
function _connectDB(callback){
    var url = 'mongodb://localhost:27017';
    MongoClient.connect(url, (err, client) => {
        callback(err, client);
    });
}

// 插入数据
exports.insertOne = (collectionName, json, callback) => {
    _connectDB((err, client) => {
        const db = client.db('test');
        db.collection(collectionName).insertOne(json, (err, result) => {
            callback(err, result);
            client.close();
        });
    });
};

// 查找
exports.find = (collectionName, json, callback) => {
    var result = [];
    _connectDB((err, client) => {
        const db = client.db('test');
        db.collection(collectionName).find(json).toArray((err, docs) => {
            if(err){
                callback('err', null);
                return;
            }
            callback(null,docs);
        });
    })
}