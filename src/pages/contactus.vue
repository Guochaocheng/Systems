<template>
  <div class="contactus">
    <el-container>
    <el-header class="header" >
      <gheader />
    </el-header>
    <el-main class="main">
      <el-card class="boxcard">
      <h1 class="contact">Contact Us</h1>
      <h1 class="address">Address</h1>
      <p><span class="el-icon-place"></span>&nbsp;&nbsp;上海市闵行区东川路800号</p>
      <p><span class="el-icon-place"></span>&nbsp;&nbsp;上海交通大学农业与生物学院创新楼513</p>
      <h1 class="telephone">Telephone And Email</h1>
      <p><span class="el-icon-message"></span>&nbsp;&nbsp;xu.wang@sjtu.edu.cn</p>
      <p><span class="el-icon-phone-outline"></span>&nbsp;&nbsp;021-54740272</p>
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
  name: 'contactus',
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
.boxcard h1, .boxcard p{
  text-align: left;
  margin-left:150px;
}
.boxcard p{
  font-size: 20px;
}
.contact{
  margin-top:100px;
}
 .address, .telephone{
  color:tomato;
  margin:50px;
  margin-top:50px;
}
</style>
