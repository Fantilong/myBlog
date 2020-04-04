const express = require('express');

const router = express.Router();

//首页
router.get('/', (req, res, next) => {
    res.render('index', {
        navbar_content: 'This is navbar_content',
        main_content: 'This is main_content',
        footer_content: 'This is footer_content',
    });
});

//article list(all_blog、pro_summary)
router.get('/articles/:category', (req, res, next) => {
    res.render('articles', {
        navbar_content: 'This is navbar_content',
        main_content: 'This is article list',
        footer_content: 'This is footer_content',
    });
});

//article_details
router.get('/articles/:category/:article_id', (req, res, next) => {
    res.render('article_details', {
        navbar_content: 'This is navbar_content',
        main_content: 'This is article details',
        footer_content: 'This is footer_content',
    });
});

module.exports = router;