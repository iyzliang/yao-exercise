const MongoClient = require('mongodb').MongoClient,
      assert = require('assert'),
      url = 'mongodb://localhost:27017';
      
const dbName = 'userDB';

const collectionName = 'user'

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    const db = client.db(dbName);
    inserDocuments(db, (result) => {
        console.log(result);
        client.close();
    })
})

// 添加多条数据
const inserDocuments = (db, callback) => {
    const collection = db.collection(collectionName);
    collection.insertMany([
        {"name": "小一", "age": 21, "love": ["小二", "小六"], "lv": {"qq": 69, "xy": 60}},
        {"name": "小二", "age": 17, "love": ["小一", "小七", "小八"], "lv": {"qq": 43, "xy": 59}},
        {"name": "小三", "age": 34, "love": ["小九"], "lv": {"qq": 73, "xy": 109}},
    ], (err, result) => {
        assert.equal(err, null);
        callback(result);
    })
}