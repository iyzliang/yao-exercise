const MongoClient = require("mongodb").MongoClient,
      assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "userDB";

const collectiobName = "user"

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('连接成功');

    // 数据库连接
    const db = client.db(dbName);
    countDocuments(db, (docs) => {
        // 断开数据库连接
        // console.log('==>', docs.count);
        
        client.close();
    })
})

const findDocuments = (db, callback) => {
    db.collection(collectiobName).find({}).limit(5).toArray((err, docs) => {
        assert.equal(err, null);
        console.log(docs);
        callback(docs);
    })
}

const countDocuments = (db, callback) => {
    db.collection(collectiobName).count({}, (err, docs) => {
        assert.equal(err, null);
        console.log(docs);
        callback(docs);
    })
}