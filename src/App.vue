<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    navbar: navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body,div,p,h1,h2,h3,h4,h5,h6,ul,li {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
