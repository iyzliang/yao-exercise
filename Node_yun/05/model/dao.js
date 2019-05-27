const MongoClient = require('mongodb').MongoClient,
      assert = require('assert');
      url = 'mongodb://localhost:27017';

const _connectDB = (callback) => {
    MongoClient.connect(url, (err, client) => {
        assert.equal(err, null);
        callback(client);
    })
}


/**
 * 
 * 插入数据
 * @param {*必传 数据库名} dbName 
 * @param {*必传 集合名} collectionName 
 * @param {*必传 添加的数组} json 
 * @param {可选 回调函数} callback 
 */
exports.insert = (dbName, collectionName, json, callback) => {
    _connectDB((client) => {
        client.db(dbName).collection(collectionName).insertMany(json, (err, result) => {
            callback(err, result);
            client.close();
        })
    })
}

/**
 * 
 * 查询数据
 * @param {*必传 数据库名} dbName 
 * @param {*必传 集合名} collectionName 
 * @param {可选 查询方法} json 
 * @param {可选 回调函数} callback 
 */
exports.find = (dbName, collectionName, json, callback) => {
    if(typeof json === 'function') {
        callback = json;
        json = {};
    } 
    _connectDB((client) => {
        client.db(dbName).collection(collectionName).find(json).toArray((err, result) => {
            callback(err, result);
        })
    })
}

/**
 * 
 * 删除数据
 * @param {*必传 数据库名} dbName 
 * @param {*必传 集合名} collectionName 
 * @param {可选 查询方法} json 
 * @param {可选 回调函数} callback 
 */
exports.remove = (dbName, collectionName, json, callback) => {
  _connectDB((client) => {
      client.db(dbName).collection(collectionName).deleteMany(json, (err, result) => {
          callback(err, result);
      })
  })  
}
