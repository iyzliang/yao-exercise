var foo = require('./test/foo');
var Peopel = require('./test/People');

console.log(foo.mag);
console.log(foo.info);

foo.showInfo();

var p = new Peopel('yzl', '男', 26);
p.sayHello();