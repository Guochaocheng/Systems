<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">
    -->
     <el-header style="height:30px;">
        <gheader/>
      </el-header>
    <el-container>
      <el-main>
      <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer class="gfooter">
      <gfooter/>
    </el-footer>
  </div>
</template>

<script>
import gheader from '@/components/header.vue'
import gfooter from '@/components/footer'

export default {
  components: { gheader, gfooter },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  margin: 0px;
  padding: 0px;
  position: relative;
}
.gfooter {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background-color:  #545C64;
}

</style>
