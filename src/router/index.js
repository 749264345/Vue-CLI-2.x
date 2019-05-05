import routes from './routes'
import store from '../store'

const Router = new VueRouter({
    // mode: 'history',
    routes
});

Router.beforeEach((to, from, next) => {
    document.title = Vue.prototype.$HEADER;

    //取消上一张页面未完成的请求
    if (Vue.prototype.$requestCancel) {
        Vue.prototype.$requestCancel();
    }


    //当前路由不存在,返回来源页面;
    if (to.matched.length === 0) {
        next({ path: from.path });
    } else {
        //当前路由存在，并且这个页面需要登录
        // if (to.meta.auth) {
        if (Vue.prototype.$isLogin()) {
            to.path == '/' ? next('/index') : next();
        } else {
            to.path == '/' ? next() : next('/');
        }
        // } else {
        //     to.path == '/' ? next() : next('/');
        // }
    }



});

export default Router;


