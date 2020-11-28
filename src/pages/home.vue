<template>
    <div class="home">
    <el-card class="box-card">
    <v-introduction> </v-introduction>
    </el-card>
    </div>
</template>

<script>
import introduction from '../components/introduction'
export default{
  name: 'home',
  data () {
    return {}
  },
  components: {
    'v-introduction': introduction
  }
}
</script>

<style scoped>
.home{
  position:absolute;
  left:250px;
  background-color:  #2c3e50;;
}
.el-card{
  width:1400px;
  height:780px;
  left:250px;
}
</style>
