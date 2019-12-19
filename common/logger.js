const config = require('../config');
const log4js = require('log4js');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

log4js.configure({
    appenders: {cheese: {type: 'console', filename: path.join(config.log_dir, 'cheese.log')}},
    categories: {default: {appenders: ['cheese'], level: 'error'}}
});

const logger = log4js.getLogger('cheese');
logger.level = config.debug && env !== 'test' ? 'DEBUG' : 'ERROR';

module.exports = logger;
