<template>
  <div id="app">
    <div class="top-menu">
      <el-menu mode="horizontal" background-color="#ffffff">
        <el-menu-item index="1" router="/HelloWorld">首页</el-menu-item>
        <el-menu-item index="2" router="/editor">写博客</el-menu-item>
        <el-menu-item index="3" router="/manage">管理</el-menu-item>
        <el-menu-item index="4" router="/user"><div class="user-icon"><i class="el-icon-user"/></div></el-menu-item>
      </el-menu>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.top-menu {
  float: right;
  margin: 0 20px 0 20px;
}
</style>
