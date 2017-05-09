<template>
    <div class="navbar">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link to="/list">文章列表</router-link></el-menu-item>
            <el-submenu index="2">
                <template slot="title">文章类型</template>
                <el-menu-item index="2-1">生活</el-menu-item>
                <el-menu-item index="2-2">技术</el-menu-item>
                <el-menu-item index="2-3">杂记</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><router-link to="/about">个人信息</router-link></el-menu-item>
        </el-menu>            
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
    a {
        text-decoration: none;
    }
</style>