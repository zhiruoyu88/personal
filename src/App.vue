<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {getStore} from '../config/until'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations([
        'INIT_LOGIN'
        ])
  },
  created () {
    let storeUserInfo = getStore('userInfo');
    if(storeUserInfo){
      this.INIT_LOGIN(storeUserInfo);
    }
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
html,body {
  min-height: 100%;
  background-color: #efefef
}
html,body,div,p,h1,h2,h3,h4,h5,h6,ul,li {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
