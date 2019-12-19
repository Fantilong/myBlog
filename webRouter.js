const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        content: "This is tilong's blog",
    });
});

module.exports = router;