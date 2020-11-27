<template>
    <div class="home">
        <menu1></menu1>
        <!-- <img src="../../assets/Wangxu.jpg"  style="float:right;" hspace=5 height="400" width="300"> -->
        <!-- <v-header> </v-header>
    <el-container class="main">
    </el-container>
    <v-footer> </v-footer> -->
    <h1>HOME</h1>
    <v-introduction> </v-introduction>
    </div>
</template>

<script>
import header from '../components/header'
import footer from '../components/footer'
import introduction from '../components/introduction'
export default{
  name: 'home',
  data () {
    return {}
  },
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-introduction': introduction
  }
}
</script>

<style scoped>
</style>
