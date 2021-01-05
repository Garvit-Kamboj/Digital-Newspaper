const router = require('express').Router();
const axios = require('axios');
router.get('/', (req, res)=>{

    const newsAPI = axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-21&sortBy=publishedAt&apiKey=30393f1830c542629ce5f065fcbfad6e`);
    newsAPI.then((result)=>{
        res.render('news', {articles: result.data.articles});
    }).catch((err)=>{
        console.log(err);
    })

});

module.exports = {router};