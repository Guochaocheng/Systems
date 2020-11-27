<template>
    <div class="header">
        <el-menu :default-active="this.$route.path" router="TRUE" class="el-menu-demo" mode="horizontal" @select="handleSelect"  background-color="#545c64"  text-color="#fff"  active-text-color="#ffd04b">
            <a href="https://systems.sjtu.edu.cn">systems.sjtu.edu.cn</a>
            <el-menu-item index="/home"><span class="el-icon-s-home"></span>HOME</el-menu-item>
            <el-menu-item index="/research"><span class="el-icon-s-flag"></span>RESEARCH</el-menu-item>
            <el-menu-item index="/publications"><span class="el-icon-s-order"></span>PUBLICATIONS</el-menu-item>
            <el-submenu index="4">
            <template slot="title"><span class="el-icon-s-custom"></span>PEOPLE</template>
            <el-menu-item index="/people/teachers">Teachers</el-menu-item>
            <el-menu-item index="/people/students">Students</el-menu-item>
            </el-submenu>
            <el-menu-item index="/contactus"><span class="el-icon-s-promotion"></span>CONTACT US</el-menu-item>
            <el-submenu index="/resources">
            <template slot="title"><span class="el-icon-s-platform"></span>RESOURCES</template>
            <el-menu-item index="/resources/genebridge">GeneBridge</el-menu-item>
            </el-submenu>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
  name: 'header',
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
.header {
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    right:0;
    transition: all 0.1s;
    margin: 0 auto;
}
.header a{
    font-size: 30px;
    float: left;
    height: 30px;
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    color:white;
    text-decoration:none;
}
.el-menu-demo {
    width: 100%;
    min-width: 500px;
    border-radius: 0;
    margin: 0 auto;
}
</style>
