var Student = require('./models/Student');

var xiaoh = new Student({"name": "小红", "age": 12, "sex": "女"});
xiaoh.save().then(() => {
    console.log('插入成功');
})

Student.create({"name": "小米", "age": 23, "sex": "男"}, (err, result) => {
    console.log(result);
})

Student.find({"name": "小米"}, (err, result) => {
    console.log(result);
})