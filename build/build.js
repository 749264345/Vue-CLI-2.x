'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
	if (err) throw err
	webpack(webpackConfig, (err, stats) => {
		spinner.stop()
		if (err) throw err
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
			chunks: false,
			chunkModules: false
		}) + '\n\n')

		if (stats.hasErrors()) {
			console.log(chalk.red('  Build failed with errors.\n'))
			process.exit(1)
		}

		console.log(chalk.cyan('  Build complete.\n'))
		console.log(chalk.yellow(
			'  Tip: built files are meant to be served over an HTTP server.\n' +
			'  Opening index.html over file:// won\'t work.\n'
		))

		/************************* 自动部署到远程服务器 **************************/
		var scpClient = require('scp2');
		var serverConf = require('../config/prod.env');
		const spinner2 = ora('正在发布到' + serverConf.NODE_NAME + '服务器...');
		spinner2.start();
		scpClient.scp('dist/', serverConf.server,
			function (err) {
				spinner2.stop();
				if (err) {
					console.log(chalk.red('发布失败.\n'));
					throw err;
				} else {
					var date = new Date();
					var year = date.getFullYear();
					var month = date.getMonth() + 1;
					var day = date.getDate();
					var hour = date.getHours();
					var minute = date.getMinutes();
					var second = date.getSeconds();
					console.log(chalk.green(
						'Success! 成功发布到' + serverConf.NODE_NAME + '服务器! \n' +
						year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second
					));
				}
			}
		);
		/***************************************************/



	})
})
