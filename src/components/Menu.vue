<template>
    <el-menu id="menu" router :default-active="$route.path">
        <el-scrollbar style="height:100%;">
            <el-menu-item index="/index" class="overview-list"><i class="fa fa-home" aria-hidden="true"></i> 首页</el-menu-item>
            <el-menu-item index="/demo" class="overview-list"><i class="fa fa-cog" aria-hidden="true"></i> 演示页面</el-menu-item>
        </el-scrollbar>
    </el-menu>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
#menu .el-scrollbar__wrap {
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>
