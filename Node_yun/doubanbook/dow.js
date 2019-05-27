var download = require('image-downloader');

download.image({url: 'https://img3.doubanio.com/view/subject/m/public/s27264181.jpg', dest: './'})
    .then(({filename, image}) => {
        console.log('图片名字'+ filename);
    }).catch((err) => {
        throw err;
    })