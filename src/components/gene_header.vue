<template>
    <div class="index">
    <div class="header">
        <el-menu :default-active="this.$route.path" router="TRUE" class="el-menu-demo" mode="horizontal" @select="handleSelect"  background-color="#545c64"  text-color="white"  active-text-color="#ffd04b">          
            <el-menu-item index="/resource/genebridge"><span class="el-icon-s-home"></span>HOME</el-menu-item>
            <el-menu-item index="/resource/genebridge/search"><span class="el-icon-s-flag"></span>SEARCH</el-menu-item>
            <el-menu-item index="/resource/genebridge/blast"><span class="el-icon-s-order"></span>BLAST</el-menu-item>
            <el-menu-item index="/resource/genebridge/gene2pathway"><span class="el-icon-s-order"></span>GENE2PATHWAY</el-menu-item>
            <el-menu-item index="/resource/genebridge/pathway2gene"><span class="el-icon-s-order"></span>PATHWAY2GENE</el-menu-item>
            <el-menu-item index="/resource/genebridge/pathway2pathway"><span class="el-icon-s-order"></span>PATHWAY2PATHWAY</el-menu-item>
            <el-menu-item index="/resource/genebridge/contact"><span class="el-icon-s-order"></span>CONTACT</el-menu-item>
            <el-menu-item index="/resource/genebridge/help"><span class="el-icon-s-order"></span>HELP</el-menu-item>
        </el-menu>
        <div class="line"></div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'gheader',
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}

</script>

<style scoped>
.header a{
    font-size: 30px;
    float: left;
    height: 30px;
    margin: 15px;
    color:white;
    text-decoration:none;
}
.el-menu-demo{
  top: 0px;
  left: 0px;
  width: 100%;
}
.header{
  margin-bottom: 50px;
  margin-top: 60px;
}
</style>
