<template>
  <div id="app">
    <el-container>
    <el-header class="header" >
      <gheader />
    </el-header>
    <el-main class="wraper" :style="{minHeight: Height+'px'}">
      <router-view></router-view>
    </el-main>
    <el-footer class="footer" style="height:40px;">
      <gfooter/>
    </el-footer>
    </el-container>
  </div>
</template>

<script>
import gheader from '@/components/header.vue'
import gfooter from '@/components/footer'

export default {
  components: { gheader, gfooter },
  name: 'App',
  data(){ 
    return { Height:0}
  },
  mouted(){
    this.Height = document.documentElement.clientHeight - 100;
    window.onresize = ()=> {thie.Height = documentElement.clientHeight -100}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:aliceblue;
  width: 100%;
  position: relative;
  min-height: 100%;
  padding-bottom: 60px;
  box-sizing: border-box;
}
head{
  width: 100%;
  left: 0px;
}
html, body{
  height:100%;
  background-color:aliceblue;
}
.footer, .wraper::after{
  height:30px;
}
.el-main{
  margin-top:80px;
  margin-bottom: 20px;
  color: #2c3e50;
  min-height: calc(100vh - 90px);
  border-radius: 0;
}
.footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 30px;
    background-color:  #545C64;
    float: center;
    display: block;
    margin: 0 auto;
}
.header{
  left:0px;
  width: 100%;
  position: absolute;
  top:0px;
  transition: all 0.1s;
}
</style>
