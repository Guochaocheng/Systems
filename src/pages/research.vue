<template>
   <div class="research">
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
import gheader from '@/components/header'
import gfooter from '@/components/footer'
export default {
  name: 'research',
  data () {
    return {}
  },
  components: {
    gheader,
    gfooter
  }
}
</script>

<style scoped>
.boxcard{
  position:absolute;
  width:1400px;
  height:780px;
  left:250px;
}
</style>
