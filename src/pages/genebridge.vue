<template>
    <div class="genebridge">
      <el-tabs v-model="modulename" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="G-MAD-genes" name="GMADG"></el-tab-pane>
          <el-tab-pane label="G-MAD-modules" name="GMADM"></el-tab-pane>
          <el-tab-pane label="M-MAD-modules" name="MMAD"></el-tab-pane>

        <!-- choose species -->
        <div class="form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="species">
             <el-select v-model="species" placeholder="Arabidopsis thaliana" style="left:0px;positions:absolute;">
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
            <el-input v-model="geneModule" :placeholder="message"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Search</el-button>
          </el-form-item>
        </el-form>
        <!-- choose species -->
        </div>
      </el-tabs>
    </div>
</template>

<script>
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
      message: "",
      geneModule: 'Input gene name',
      modulename: "GMADG"
    }
  },
  methods:{
    onSubmit(){
      console.log('Submit!');
    },
    handleClick(tab, event){
      if(tab.name == "GMADG"){
        label = 'Gene Name';
        message = 'Input gene name';
      }else{
        label = 'Module Name';
        message = 'Input module name';
      }
    }
  },
  components: {},
}
</script>

<style scoped>
.form{
  float:left;

}
</style>
