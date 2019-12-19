/*
* 项目 设置
* */

const path = require('path');

const config = {
    // 本地调试相关
    debug: true,
    port: 5000,

    //
    get mini_assets() {
        return !this.debug
    },
    // 日志路径
    log_dir: path.join(__dirname, 'logs'),

};

if (process.env.NODE_ENV === 'test') {
    config.db = 'mongodb://127.0.0.1/my_blog_test';
}

module.exports = config;