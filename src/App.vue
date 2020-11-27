<template>
  <div id="app">
    <el-container>
      <el-header><gheader/></el-header>
      <el-container class="g-container">
        <el-main>
        <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-footer class="g-footer"><gfooter/></el-footer>
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
}
</style>
