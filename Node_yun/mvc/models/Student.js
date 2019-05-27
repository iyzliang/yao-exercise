const mongoose = require('mongoose');
const db = require('./db');

// 创建结构
var studentSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    sex: {type: String}
});

// 创建模型
var studentModel = db.model('Student', studentSchema);

studentSchema.statics.find = function(json, callback) {
    this.model('Student').find(json, callback);
}


module.exports = studentModel;