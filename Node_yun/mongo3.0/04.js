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

      updateDocument(db, (result) => {
          // 断开数据库连接
          client.close();
      })
})

const updateDocument = (db, callback) => {
    db.collection(collectiobName).updateOne({"name": "小三"},{$set: {"age": 78}}, (err, result) => {
        assert.equal(err, null);
        console.log(result);
        callback(result);
    })
}