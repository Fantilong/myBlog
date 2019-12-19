const config = require('./config.js');
const pathLib = require('path');
const createError = require('http-errors');

const logger = require('./common/logger');

const express = require('express');
const app = express();

app.engine('pug', require('pug').__express);
app.set('views', pathLib.join(__dirname, 'views'));
app.set('view engine', 'pug');


const webRouter = require('./webRouter');

app.use('/', webRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    logger.error(err);
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(config.port, () => {
    logger.info("tilong's blog listening on port", config.port);
    logger.info('');
});