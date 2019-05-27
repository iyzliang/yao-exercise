const http = require('http');
const superagent = require('superagent');
const cheerio = require('cheerio');
const eventproxy = require('eventproxy');
const fs = require('fs');



superagent.get('https://www.zhihu.com/')
    .end((err, data) => {
        if(err) {
            throw err;
        }
        fs.writeFile('./test.txt', data.text, (err, result) => {
            if(err){
                return
            }
            console.log("成功");
        })
    })