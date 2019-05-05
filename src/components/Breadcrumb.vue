<template>
    <div class="breadcrumb">
        <div class="breadcrumb-wrap">
            <el-row>
                <el-col :span="12">
                    <a :href=" '#'+url.path " v-for="(url,index) in $route.meta.breadcrumb" :key="index" class="route-link">{{url.name}}</a>
                    <span class="breadcrumb-name">{{$route.name}}</span>
                </el-col>
                <el-col :span="12" class="text-right">
                    <slot></slot>
                </el-col>
            </el-row>
        </div>
    </div>
</template>