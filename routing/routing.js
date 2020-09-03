const cheerio = require('cheerio');
const axios = require("axios");
module.exports = function(app){
    app.get('/',(req,res)=>{
        res.render('home');
    });
    app.get('/scrape',async (req,res)=>{
        axios.get('https://www.reddit.com/r/Catswhoyell/').then((response)=>{
            const $ = cheerio.load(response.data);
            let result={};
            $('._1oQyIsiPHYt6nx7VOmd1sz').each(function(i,element){
                
                result.title=$(this).find('h3').text();
                result.link=$(this).find('a').attr('href');
                result.video=$(this).find('video').children('source').attr('src');
                result.picture=$(this).find('img').attr('src');
                res.render('home',result);
            });
            res.redirect('/');
        });
    }); 
};