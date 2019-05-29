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

    indexCollection(db, (results) => {
        findDocuments(db, (docs) => {
            // 断开数据库连接
            client.close();
        })
    })
})

const indexCollection = (db, callback) => {
    db.collection(collectiobName).createIndex(
        {"age": 1},
        { unique:true },
        (err, results) => {
            console.log(results);
            callback();
        }
    )
}

const findDocuments = (db, callback) => {
    db.collection(collectiobName).find({}).toArray((err, docs) => {
        assert.equal(err, null);
        console.log(docs);
        callback(docs);
    })
}