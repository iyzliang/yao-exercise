var https = require('https');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var eventproxy = require('eventproxy');
var download = require('image-downloader')
var url = 'https://book.douban.com/top250?icn=index-book250-all';
var urlList = [];
var names = [];
var fs = require('fs');
var db = require('./model/db');

var ep = new eventproxy;

for(let i = 0; i < 250; i += 25){
    urlList.push(url + '&start=' + i)
}
urlList.forEach(url => {
    https.get(url, (res) => {
        var chunks = [];
        res.on('data', (chunk) => {
            chunks.push(chunk);
        });
        res.on('end', () => {
            var html = iconv.decode(Buffer.concat(chunks), 'utf8');
            var $ = cheerio.load(html, {decodeEntities: false});
        
            $('.item').each((idx, el) => {
                var obj = {};
                var xinxi = $(el).find('p.pl').text().split(' / ');
                var imgname = $(el).find('.nbg>img').attr('src').split('/');
                obj.image = imgname[imgname.length -1];
                obj.name = $(el).find('.pl2>a').attr('title');
                obj.author = xinxi[0];
                obj.cbs = xinxi[xinxi.length - 3];
                obj.fri = xinxi[xinxi.length - 2];
                obj.price = xinxi[xinxi.length - 1];
                obj.score = $(el).find('.rating_nums').text();
                obj.jieshao = $(el).find('.quote>.inq').text();

                async function downloadIMG() {
                    try {
                      const { filename, image } = await download.image({url: $(el).find('.nbg>img').attr('src'), dest: './images'})
                    } catch (e) {
                      throw e
                    }
                }
                downloadIMG();

                ep.emit('fn', JSON.stringify(obj));
            });
        })
    })

})
ep.after('fn', 250, (names) => {
    names = `[${names}]`;
    db.insert('booksDB', 'books', JSON.parse(names), (err, r) => {
        if(err) throw err;
        console.log('db ok');
    });
    fs.writeFile('./books.json', names, () => {
        console.log('ok');
    });
})