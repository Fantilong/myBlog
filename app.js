const config = require('./config.js');

const express = require('express');
const app = express();

app.use('/', (req, res, next) => {

});

app.listen(config.port, () => {


});