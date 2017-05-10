<template>
  <div class="list">
    <ul>
      <li v-for="article in articles">
          <div class="title"><a href="">{{article.title | subStr(25)}}</a><span class="time">{{article.time}}</span></div>
          <div class="content">{{article.content | subStr(260)}}</div>
          <el-tag>{{article.tag }}</el-tag>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        len: 40,
        articles: [
        {
          id: 0,
          title: '我的第一篇文章我的第一篇文章我的第一篇文章我的第一篇文章我的第一篇文章我的第一篇文章',
          time: '2017-05-04',
          tag: '生活',
          content: '午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭午饭吃黄焖鸡米饭'
        },
        {
          id: 1,
          title: '我的第二篇文章',
          time: '2017-05-05',
          tag: '科技',
          content: 'vue学习'
        }
        ]
      }
    },
    filters: {
      subStr (value,num){
        let str = value.length>num ? (value.substr(0,num)+'...'):value
        return str;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.list {
  width:875px;
  float:left;
}
ul {
  list-style-type: none;
  padding: 0;
}
.content {
    line-height: 29px;
    margin: 10px 0;
    font-size: 14px;
    color: #666;
}
li {
  display:block;
  border-radius: 5px;
  background-color: #fff;
  padding: 15px 20px;
  margin-bottom: 18px;
}
.title a {
  font-size: 18px;
}
.title .time {
  float:right;
  font-size: 14px;
  color:#ccc;
  margin-top:2px;
}
a {
  color: #42b983;
}
.el-menu--horizontal .el-submenu>.el-menu {
  top:60px;
}
</style>
