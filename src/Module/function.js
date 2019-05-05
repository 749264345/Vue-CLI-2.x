/**
 * 对提交表单执行持久型xss攻击检查
 * @param {String} field 
 */
export const $checkXss = function (field) {
	if (/\<script|script\>|style/ig.test(field)) {
		Vue.prototype.$message.error('包含非法字符');
		return false;
	}
	return true;
};

/**
 * 查询用户是否登录
 */
export const $isLogin = function () {
	return localStorage.getItem('token') != '' && localStorage.getItem('token') != null;
};

/**
 * 判断数据是否为空
 * @param {*} data 
 */
export const $isEmpty = function (data) {
	return typeof data == 'undefined' || data === '' || data === null || data === 'null' || data.length == 0;
};

/*js创建虚拟链接 模拟点击下载 */
export const $download = function (url) {
	const a = document.createElement('a');
	a.setAttribute('download', '');
	a.setAttribute('href', url);
	a.click();
};


/**
 * 格式化当前时间
 */
export const $now = function () {
	var myDate = new Date(); //获取系统当前时间
	var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
	var month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
	var date = myDate.getDate(); //获取当前日(1-31)
	var hours = myDate.getHours(); //获取当前小时数(0-23)
	var min = myDate.getMinutes(); //获取当前分钟数(0-59)
	var seconds = myDate.getSeconds(); //获取当前秒数(0-59)
	return (
		year + '-' + month + '-' + date + '' + hours + ':' + min + ':' + seconds
	);
};

/**
 * 
 * @param {String} className 标签class
 * @param {Array} script 需要延迟加载的js链接数组
 * @param {*} cb 加加载后的回调函数
 */
export const $xlsxScript = function (className, script, cb) {
	if (document.getElementsByClassName(className).length === 0) {
		for (let i = 0; i < script.length; i++) {
			const s = document.createElement('script');
			s.type = 'text/javascript';
			s.src = script[i];
			s.setAttribute('class', className);
			document.body.appendChild(s);
		}
	}
	if (cb) {
		cb();
	}
};

/**
 * 模拟请求，接收一个回调函数
 * @param {*} cb 
 */
export const $demo = function (cb) {
	setTimeout(() => {
		cb();
	}, 1000);
}