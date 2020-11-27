<template>
    <div class="contrainer">
        <el-row :gutter="20">
            <el-col :span="10">
                <h2 class="penal-header" ><strong > 上海交通大学细胞代谢与系统生物学实验室</strong></h2>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Using molecular biology, multi-omics, systems biology, We are interested in the complex phenotypes that interact closely with the environment, especially the phenotypes related to stress resistance, aging and development that closely related to mitochondria.We mainly focuse on as follows:<br>
                (1) Organelle interactions and mitochondrial reverse signaling in plant development and resistance.<br>
                (2) The mechanism of mitochondrial signal-regulating cells and individual aging. <br>
                (3) Application of systems biology in plant mitochondrial research.</p>
            </el-col>
            <el-col :span="10">
                <v-carousel> </v-carousel>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import carousel from './carousel'
export default {
  name: 'introduction',
  data () {
    return {}
  },
  components: {
    'v-carousel': carousel
  }
}
</script>

<style scoped>
h2 {
    font-size: 30px;
    margin-top:50px;
    margin-left: 50px;
    margin-bottom: 80px;
}
p {
    font-size: 16px auto;
    line-height: 30px;
    padding: 0 20px;
}
</style>
