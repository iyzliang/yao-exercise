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

      // 断开数据库连接
      client.close();
})
