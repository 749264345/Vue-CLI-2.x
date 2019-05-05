<template>
    <div id="admin" v-loading="authLoading">
        <Header>
            <el-dropdown trigger="click" class="pull-right">
                <span class="el-dropdown-link username">
                    {{$store.state.username}}
                    <label class="header-menu-btn"><i class="fa fa-bars"></i></label>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <div @click='showDialog = true'>修改密码</div>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <div @click='logout'>退出</div>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </Header>

        <Menu></Menu>
        <router-view />

        <!-- 修改密码 -->
        <el-dialog title="修改密码" :visible.sync="showDialog" width="380px" :before-close="closeDialog">
            <el-form size="small" ref="formData" :model="formData" label-width="80px" :rules="rules">
                <el-form-item label="原密码" prop="psw">
                    <el-input v-model.trim="formData.psw" placeholder="请输入原密码" type="password"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="pass">
                    <el-input v-model.trim="formData.pass" placeholder="请输入新密码" ref="pass" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input v-model.trim="formData.checkPass" placeholder="请输入确认密码" type="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button type="primary" @click="submit" :loading="loading" size="small">确定</el-button>
                <el-button @click="closeDialog" size="small">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Header from "../components/Header";
import Menu from "../components/Menu";

export default {
    components: {
        Menu,
        Header
    },
    data() {
        //验证原密码
        var psw = (rule, value, callback) => {
            if (value == '') {
                callback(new Error('请输入原密码'));
            } else {
                callback();
            }
        };
        //验证新密码
        var pass = (rule, value, callback) => {
            if (value == '') {
                callback(new Error('请输入新密码'));
            } else if (!/^[0-9a-zA-Z]{6}$/.test(value)) {
                callback(new Error('密码必须为6位数字与大小写英文字母组合'));
            } else {
                callback();
            }
        };
        //验证确认密码
        var checkPass = (rule, value, callback) => {
            if (value == '') {
                callback(new Error('请输入确认密码'));
            } else if (!/^[0-9a-zA-Z]{6}$/.test(value)) {
                callback(new Error('密码必须为6位数字与大小写英文字母组合'));
            } else if (this.$refs['pass'].$refs['input'].value != value) {
                callback(new Error('两次密码输入不一致'));
            } else {
                callback();
            }
        };
        return {
            loading: false,
            showDialog: false,
            formData: {
                psw: '',
                pass: '',
                checkPass: ''
            },
            loginname: localStorage.getItem('loginname'),
            rules: {
                psw: [{ validator: psw, trigger: 'blur', required: true }],
                pass: [{ validator: pass, trigger: 'blur', required: true }],
                checkPass: [{ validator: checkPass, trigger: 'blur', required: true }]
            },
            authLoading: false
        }
    },
    methods: {
        logout() {
            window.localStorage.setItem('token', '');
            this.$router.push("/");
        },
        //修改密码
        closeDialog() {
            this.loading = false;
            this.showDialog = false;
            this.$refs['formData'].resetFields();
        },
        submit() {
            this.$refs['formData'].validate((valid) => {
                if (valid) {
                    this.loading = true;
                    this.$demo(() => {
                        this.loading = false;
                        this.showDialog = false;
                        this.$message.success('密码修改成功');
                        this.$refs['formData'].resetFields();
                    });

                } else {
                    return false;
                }
            });
        }
    }
};
</script>
