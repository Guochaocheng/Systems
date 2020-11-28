<template>
  <div class="contactus">
    <el-card class="box-card">
    <h1 class="contact">Contact Us</h1>
    <h1 class="address">Address</h1>
    <p><span class="el-icon-place"></span>&nbsp;&nbsp;上海市闵行区东川路800号</p>
    <p><span class="el-icon-place"></span>&nbsp;&nbsp;上海交通大学农业与生物学院创新楼513</p>
    <h1 class="telephone">Telephone And Email</h1>
    <p><span class="el-icon-message"></span>&nbsp;&nbsp;xu.wang@sjtu.edu.cn</p>
    <p><span class="el-icon-phone-outline"></span>&nbsp;&nbsp;021-54740272</p>
    </el-card>
    </div>
</template>

<script>
export default {
  name: 'contactus',
  data () {
    return {}
  },
  components: {
  }
}
</script>

<style scoped>
.contactus{
  position:absolute;
  left:250px;
  background-color:  #2c3e50;;
}
.box-card{
  width:1400px;
  height:780px;
  left:250px;
}
.box-card h1, .box-card p{
  text-align: left;
  margin-left:150px;
}
.box-card p{
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
