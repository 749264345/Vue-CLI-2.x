'use strict'

const TARGET = process.env.npm_lifecycle_event;

//测试环境
if (TARGET === 'build:test') {
    module.exports = {
        NODE_ENV: '"build:test"',
        NODE_NAME: '"测试"',
        API: '"http://test"',
        server: {
            host: '',
            port: 8080,
            username: '',
            password: '',
            path: ''
        }
    }
}

//生产环境
if (TARGET === 'build:prod') {
    module.exports = {
        NODE_ENV: '"build:prod"',
        NODE_NAME: '"生产"',
        API: '"http://prod"',
        server: {
            host: '',
            port: 8080,
            username: '',
            password: '',
            path: ''
        }
    }
}

