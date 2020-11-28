<template>
    <div class="genebridge">
      <el-tabs v-model="modulename" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="G-MAD-genes" name="GMADG"></el-tab-pane>
          <el-tab-pane label="G-MAD-modules" name="GMADM"></el-tab-pane>
          <el-tab-pane label="M-MAD-modules" name="MMAD"></el-tab-pane>

        <!-- choose species -->
        <div class="form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="Species">
             <el-select v-model="species" placeholder="Arabidopsis thaliana" >
                <el-option 
                  v-for="item in speciesData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item> 
          <el-form-item :label="label">
          <!-- <el-form-item prop="priority"><span slot="label">label</span> -->
            <el-input v-model="geneModule" v-bind:placeholder="message"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" :loading="loadtype" @click="onSubmit">Search</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-bell" @click="Example">Example</el-button>
          </el-form-item>
        </el-form>
        <!-- choose species -->
        </div>
        <div class="plotRegion" >
          <div class="plotscatter plot1" style="width:50%;height:400px">
          <vue-plotly :data="data" :layout="layout" :options="options" />
          </div>
        </div>
      </el-tabs>
    </div>
</template>

<script>
import VuePlotly from '@statnett/vue-plotly'
import Axios from 'axios'
export default {
  name: 'genebridge',
  data () {
    return {
      speciesData:[{
        value:"species1",
        label: "Arabidopsis thaliana"
      },{
        value:"species2",
        label: "Oryza sativa"
      },{
        value:"species3",
        label: "Solanum lycopersicum"
      }],
      species: '',
      label : 'Gene Name',
      message: "Input gene name",
      geneModule: 'Input gene name',
      modulename: "GMADG",
      data:[{x:[1,3,5], y:[2,4,6],type:"scatter"}],
      layout: {
        xaxis:{title: "Gene Name"},
        yaxis:{title: "GMAD"},
        
      },
      options: {},
    }
  },
  methods:{
    
    getData(){
      //var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      //Axois.get(api).then((response) => {
      //  this.result =  response.data.result;
      //}).catch((error) => {
      //  console.log(error),
      //})
      this.$http.get('http://localhost:3000/api/show').then((res) => {
        console.log('res', res);
        this.label = res.data.data;
      })
    },
    onSubmit(){
      this.$http.get('/api/show')
      .then((res) => {
        console.log('res', res)
        this.label = res.data.data
      })
      console.log('Submit!');
    },
    Example(){
      if(tab.name == "GMADG"){
        this.geneModule = "AT1G01000"
      }else{
        this.geneModule = "GO:000001"
      }
    },
    handleClick(tab, event){
      if(tab.name == "GMADG"){
        this.label = 'Gene Name';
        this.message = 'Input gene name';
      }else{
        this.label = 'Module Name';
        this.message = 'Input module name';
      }
    }
  },
  /*mounted(){
    this.getData();
  },*/
  components: {VuePlotly},
}
</script>

<style scoped>
.form{
  float:left;
}
.vue-plotly{
  margin-top:50px;
}
.plotscatter{
  margin:10px;
  margin-bottom:50px;
}
</style>
