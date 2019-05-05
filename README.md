## 构建说明

``` bash
# 安装依赖
npm install

# 切换开发环境API localhost:8080
npm run dev

# 切换测试环境API localhost:8080
npm run test

# 切换生产环境API localhost:8080
npm run prod

# 打测试环境包
npm run build:test

# 打生产环境包
npm run build:prod

# 查看报告
npm run build --report
```

## 构建配置

> package.json
```javascript
// npm run dev
"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"

// npm run test
"test": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"

// npm run prod
"prod": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"

// npm run build:test
"build:test": "node build/build.js"

// npm run build:prod
"build:prod": "node build/build.js"
```

## 环境接口配置
> config/dev.env.js
```javascript
const TARGET = process.env.npm_lifecycle_event;

// 开发环境
if( TARGET === 'dev' ){
  var data = {
    NODE_ENV: '"开发"',
    API:'"http://www.dev.com"'
  }
}

//测试环境
if( TARGET === 'test' ){
  var data = {
    NODE_ENV: '"测试"',
    API:'"http://www.test.com"'
  }
}

//生产环境
if( TARGET === 'prod' ){
  var data = {
    NODE_ENV: '"生产"',
    API:'"http://www.prod.com"'
  }
}
```

> config/prod.env.js
```javascript
const TARGET = process.env.npm_lifecycle_event;

//测试环境
if (TARGET === 'build:test') {
    module.exports = {
        NODE_ENV: '"测试"',
        API: '"http://www.test.com"'
    }
}

//生产环境
if (TARGET === 'build:prod') {
    module.exports = {
        NODE_ENV: '"生产"',
        API: '"http://www.prod.com"'
    }
}
```

## CDN引用
> build/webpack.base.conf.js
```javascript
// 通过CDN引用vue全家桶
// 减小打包后文件大小，加快打包速度

module.exports = {
    externals: {
        'vue': 'Vue',
        'vuex':'Vuex',
        'vue-router': 'VueRouter',
        'axios': 'axios'
    },
    ...
}
```