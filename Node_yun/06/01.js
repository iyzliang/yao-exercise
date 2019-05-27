const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String, age: Number });

const kitty = new Cat({ name: 'Zildjian', age: 5 });

kitty.save().then(() => console.log('meow'));