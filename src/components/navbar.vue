<template>
    <div class="navbar">
        <div class="mid">
            <div class="title"><a href=""><h1>智若雨个人博客</h1></a></div>
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo pull-right" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><router-link to="/Main">文章列表</router-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">文章类型</template>
                    <el-menu-item index="2-1">慢生活</el-menu-item>
                    <el-menu-item index="2-2">学无止境</el-menu-item>
                    <el-menu-item index="2-3">碎言碎语</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><router-link to="/about">个人信息</router-link></el-menu-item>
                <el-submenu index="3">
                    <template slot="title">{{userInfo.username}}</template>
                    <el-menu-item index="3-1">个人信息</el-menu-item>
                    <el-menu-item index="3-2">退出</el-menu-item>
                </el-submenu>
            </el-menu>
            <div class="clear"></div>  
        </div>  
    </div>    
</template>

<script>
    import {logout} from '../service/getData'
    export default {
        data() {
          return {
            activeIndex: '1',
            activeIndex2: '1',
            hasLogin:this.$store.state.hasLogin,
            userInfo:this.$store.state.userInfo
          };
        },
        methods: {
          async handleSelect(key, keyPath) {
                let params = new URLSearchParams();
                params.append('logout', true);
                params.append('id', this.$store.state.userInfo.id);
                var results = await logout(params);
                consoel.log(results)
            }
        }
    }
</script>

<style scoped>
    .navbar {
        background-color: #324157;
    }
    .mid {
        width:1190px;
        margin:0 auto;
    }
    .title {
        float:left;
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
    .login {
        float:right;
    }
    .el-menu[data-v-2a96d0bd].pull-right {
        float:right;
    }
</style>