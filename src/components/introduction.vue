<template>
    <div class="contrainer">
        <el-row :gutter="20">
            <el-col :span="10">
            <el-card class="box-card">
                <div slot='header' class='clearfix'>
                    <span>上海交通大学细胞代谢与系统生物学实验室</span>
                </div>
                <div v-for="i in title" :key="i" class="text item">
                    {{i}}
                </div>
            </el-card>
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
    return {
        title: ["Using molecular biology, multi-omics, systems biology, We are interested in the complex ",
            "phenotypes that interact closely with the environment,especially the phenotypes related to ",
            "stress resistance, aging and development that closely related to mitochondria.",
            "We mainly focuse on as follows:",
            "(1) Organelle interactions and mitochondrial reverse signaling in plant development ",
            "and resistance.",
            "(2) The mechanism of mitochondrial signal-regulating cells and individual aging.",
            "(3) Application of systems biology in plant mitochondrial research."]
    }
  },
  components: {
    'v-carousel': carousel
  }
}
</script>

<style scoped>
.text{
    font-size: 18px;
    text-align: left;
    margin-bottom: 18px;
    line-height: 15px;
    word-wrap: break-word; 
    word-break: break-all;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.clearfix:before, .clearfix:after {
    display: table;
    content: "";
}
.clearfix span{
    font-family: Georgia, Times, 'Times New Roman', serif;
    font-size: 30px;
    font: bold;
    color:turquoise;
}
</style>
