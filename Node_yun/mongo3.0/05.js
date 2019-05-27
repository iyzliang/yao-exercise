const MongoClient = require("mongodb").MongoClient,
      assert = require("assert"),
      mongodb = require('mongodb');


const url = "mongodb://localhost:27017";

const dbName = "userDB";

const collectiobName = "user"

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('连接成功');

    // 数据库连接
    const db = client.db(dbName);
    removeDocument(db, (result) => {
        // 断开数据库连接
        client.close();
    })
})

const removeDocument = (db, callback) => {
    db.collection(collectiobName).deleteOne({"_id": new mongodb.ObjectID('5af13da813cb01f3f7c03a66')}, (err, result) => {
        assert.equal(err, null);
        console.log(result);
        callback(result);
    })
}