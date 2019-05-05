<template>
    <div class="main">
        <Breadcrumb>
            <el-button type="parimary" size="small" @click="xlsx" :loading="loading" :disabled="loading">导出xlsx</el-button>
        </Breadcrumb>

        <div class="main-content">
            <el-card>
                <div slot="header" class="clearfix">
                    <h3 style="display:inline-block;margin:0;">构建方案 : https://github.com/749264345/Vue-CLI-2.x</h3>
                    <a style="float: right; padding: 3px 0" href="https://github.com/749264345/Vue-CLI-2.x">源码地址</a>
                </div>
                <ul>
                    <li>1.Vue,Vuex,vue-router,axios通过CDN引入；优化打包后文件过大的问题</li>
                    <li>2.开发环境区分开发，测试，生产；提高开发效率</li>
                    <li>3.打包区分测试与生产</li>
                    <li>4.实现项目打包后自动部署到远程服务器</li>
                    <li>5.模块化构建vuex状态管理</li>
                    <li>6.打包后自动清除console.log()</li>
                    <li>7.项目默认基于Element-ui,对相关组件二次封装</li>
                    <li>8.模块化构建axios请求响应拦截器</li>
                    <li>9.模块化构建vue-router路由管理</li>
                    <li>10.模块化构建全局过滤器与全局函数</li>
                </ul>
            </el-card>
        </div>

    </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb";

export default {
    components: {
        Breadcrumb
    },
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style <style scoped>
ul li {
    line-height: 3;
    font-size: 13px;
}
</style>
