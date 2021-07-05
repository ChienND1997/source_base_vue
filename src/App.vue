<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  content: '';
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  height: 100vh;
  background: -webkit-gradient(linear,left top,right bottom,from(#6d327c),color-stop(#485DA6),color-stop(#00a1ba),color-stop(#01b18e),to(#32b37b));
  background: -o-linear-gradient(left top,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b);
  background: linear-gradient(to right bottom,#6d327c,#485DA6,#00a1ba,#01b18e,#32b37b);
}
</style>
