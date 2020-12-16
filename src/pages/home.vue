<template>
    <div class="home">
    <el-container>
      <el-header class="header" >
        <gheader />
      </el-header>
      <el-main class="main">
        <el-card class="boxcard">
        <v-introduction> </v-introduction>
        </el-card>
      </el-main>
      <el-footer class="footer" >
        <gfooter/>
      </el-footer>
      </el-container>
    </div>
</template>

<script>
import introduction from '../components/introduction'
import gheader from '@/components/header'
import gfooter from '@/components/footer'
export default{
  name: 'home',
  data () {
    return {}
  },
  components: {
    'v-introduction': introduction,
     gheader, 
     gfooter
  }
}
</script>

<style scoped>
/*
.home{
  position:absolute;
  left:0px;
  background-color:  #2c3e50;;
}
*/
.main{margin-top: 60px;}
.boxcard{
  position:absolute;
  width:1400px;
  height:780px;
  left:250px;
}
</style>
