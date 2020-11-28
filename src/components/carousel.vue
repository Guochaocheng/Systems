<template>
    <div class="block">
    <div class="demonstration">Recent publications</div>
    <!--<el-divider></el-divider>-->
    <el-carousel trigger="click" height="300px" width="450px">
    <!--<el-carousel-item v-for="item in 4" :key="item">-->
    <el-carousel-item class="el-carousel-item"> <img src="../assets/age_mouse.jpg" alt=""></el-carousel-item>
    <el-carousel-item class="el-carousel-item"> <img src="../assets/eGWAS_mouse.jpg" alt=""></el-carousel-item>
    <el-carousel-item class="el-carousel-item"> <img src="../assets/UPRmt_plant.jpg" alt=""></el-carousel-item>
    <el-carousel-item class="el-carousel-item"> <img src="../assets/GARS_plant.jpg" alt=""></el-carousel-item>
    <!--
    <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
    </el-carousel-item>
    -->
    </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
color: #475669;
font-size: 12px;
opacity: 0.75;
line-height: 150px;
margin: 0;
}

.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}
.el-carousel__item img{
    width: 510px;
    height: 300px;
}
.block{
    width:600px;
    margin-top:20px;
    margin-left:0px;
    float:left;
}
.demonstration{
    font-size: 20px;
    font: bold;
    text-align: left;
    margin-bottom: 10px;
}
</style>
