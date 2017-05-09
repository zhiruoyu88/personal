<template>
  <div class="list">
    <ul>
      <li v-for="article in articles">
          <div class="title"><a href="">{{article.title}}</a><span class="time">{{article.time}}</span></div>
          <div class="content">{{article.content}}</div>
          <div class="tag">{{article.tag}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        articles: [
        {
          id: 0,
          title: '我的第一篇文章',
          time: '2017-05-04',
          tag: '生活',
          content: '午饭吃黄焖鸡米饭'
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}
.el-menu--horizontal .el-submenu>.el-menu {
  top:60px;
}
</style>
