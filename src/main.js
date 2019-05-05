//生产环境不显示提示
Vue.config.productionTip = false;

import App from './App';
import router from './router';
import store from './store'

// 自定义过滤器
import * as filters from './Module/filters';
Object.keys(filters).forEach((key) => {
	Vue.filter(key, filters[key]);
});

// 全局公共方法
import * as FUN from './Module/function';
Object.keys(FUN).forEach((key) => {
	Vue.prototype[key] = FUN[key];
});

// 全局变量
Vue.prototype.$ROUTER = router;
Vue.prototype.$EMPTY = '--';
Vue.prototype.$ENV = process.env.NODE_ENV;
Vue.prototype.$BASEURL = process.env.API;
Vue.prototype.$HEADER = 'Vue-CLI 2.x';


// 全局请求&响应拦截器
import './Module/interceptors';
// 设置接口地址
axios.defaults.baseURL = process.env.API;
axios.defaults.withCredentials = true;


new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});
