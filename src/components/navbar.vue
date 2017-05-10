<template>
    <div class="navbar">
        <div class="title"><a href=""><h1>智若雨个人博客</h1></a></div>
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link to="/list">文章列表</router-link></el-menu-item>
            <el-submenu index="2">
                <template slot="title">文章类型</template>
                <el-menu-item index="2-1">慢生活</el-menu-item>
                <el-menu-item index="2-2">学无止境</el-menu-item>
                <el-menu-item index="2-3">碎言碎语</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><router-link to="/about">个人信息</router-link></el-menu-item>
        </el-menu>
        <div class="clear"></div>            
    </div>    
</template>

<script>
    export default {
        data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped>
    .navbar {
        background-color: #324157;
    }
    .title {
        float:left;
        margin-left:30px;
    }
    .el-menu {
        float:left;
        margin-left:40px;
    }
    h1 {
        color: #ccc;
        font-weight: normal;
        font-size: 24px;
        margin-top: 12px;
    }
    .clear {
        clear:both;
    }
    a {
        text-decoration: none;
    }
    .el-menu-item {
        padding: 0;
    }
    .el-menu-item>a {
        display: block;
        padding:0 20px;
    }
    .el-menu--horizontal .el-submenu>.el-menu {
        top:59px !important;
    }
</style>