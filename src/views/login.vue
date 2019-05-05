<template>
    <div id="login">
        <Header></Header>

        <div class="wrap">
            <div class="container">
                <h1 class="name">{{$HEADER}}</h1>

                <form class="form" @keyup.enter="login">
                    <el-input class="input" v-model="loginname" type="text" placeholder="账号"></el-input>
                    <el-input class="input" v-model="password" type="password" placeholder="密码"></el-input>
                    <el-button class="button" type="primary" @click="login" :loading="loading">登 录</el-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header";
import * as $ from '../Module/API/demoAPI'

export default {
    components: {
        Header
    },
    data() {
        return {
            loginname: "demo",
            password: "demo",
            loading: false
        };
    },
    methods: {
        //执行登录
        login() {
            if (this.loginname == '') {
                this.$message.error('请输入账号');
                return;
            }
            if (this.password == '') {
                this.$message.error('请输入密码');
                return;
            }

            //模拟登录
            if (this.loginname == 'demo' && this.password == 'demo') {
                this.loading = true;
                this.$demo(() => {
                    this.loading = false;
                    this.$store.commit('isLogin', '演示账号');
                    window.localStorage.setItem('token', 'token');
                    this.$router.push("/index");
                })
            }
        }
    }
};
</script>
