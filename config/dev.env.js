'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
const TARGET = process.env.npm_lifecycle_event;

//开发环境
if (TARGET === 'dev') {
    var data = {
        NODE_ENV: '"dev"',
        API: '"http://dev"'
    }
}

//测试环境
if (TARGET === 'test') {
    var data = {
        NODE_ENV: '"test"',
        API: '"http://test"'
    }
}

//生产环境
if (TARGET === 'prod') {
    var data = {
        NODE_ENV: '"prod"',
        API: '"http://www.prod"'
    }
}

module.exports = merge(prodEnv, data);
