<template>
  <div class="publications">
    <el-container>
    <el-header class="header" >
      <gheader />
    </el-header >
    <el-main class="main">
      <el-card class="boxcard" >
        <h1 style="text-align: left;color:tomato;margin-left:20px;margin-bottom:20px;">2020</h1>
        <ol>
        <li v-for="pub in publist2020" :key="pub" class="text item">{{pub}}</li>
        </ol>
        <h1 style="text-align: left;color:tomato;margin-left:20px;margin-bottom:20px;">2019</h1>
        <ol>
        <li v-for="pub in publist2019" :key="pub" class="text item">{{pub}}</li>
        </ol>
        <h1 style="text-align: left;color:tomato;margin-left:20px;margin-bottom:20px;">2018</h1>
        <ol>
        <li v-for="pub in publist2018" :key="pub" class="text item">{{pub}}</li>
        </ol>
        <h1 style="text-align: left;color:tomato;margin-left:20px;margin-bottom:20px;">2017</h1>
        <ol>
        <li v-for="pub in publist2017" :key="pub" class="text item">{{pub}}</li>
        </ol>
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
  name: 'publications',
  data () {
    return {
      publist2020:["Sleiman MB, Jha P, Houtkooper R, Williams R, Wang X*, Auwerx J*. The gene regulatory footprint of aging highlights conserved central regulators. Cell Reports. 2020 In Press. (IF= 8.109)",
              "Liu M#, Sun W#, Ma Z, Yu G, Li J, Wang Y, Wang Xu. Comprehensive multiomics analysis reveals key roles of NACs in plant growth and development and its environmental adaption mechanism by regulating metabolite pathways. Genomics. 2020; 112: 4897-4911. (IF= 6.205)",
              "Oppi S, Nusser-Stein S, Blyszczuk P, Wang X, Jomard A, Marzolla V, Yang K, Velagapudi S, Ward LJ, Yuan XM, Geiger MA, Guillaumon AT, Othman A, Hornemann T, Rancic Z, Ryu D, Oosterveer MH, Osto E, Lüscher TF, Stein S. Macrophage NCOR1 protects from atherosclerosis by repressing a pro-atherogenic PPARγ signature. Eur Heart J. 2020; 41: 995-1005. (IF=22.673)",
              "Houzelle A, Dahlmans D, Nascimento EBM, Schaart G, Jörgensen JA, Moonen-Kornips E, Kersten S, Wang X, Hoeks J. MicroRNA-204-5p modulates mitochondrial biogenesis in C2C12 myotubes and associates with oxidative capacity in humans. J Cell Physiol. 2020: 1-13. (IF=5.546)",
        ],
      publist2019: ["Dahlmans D, Houzelle A, Andreux P, Wang X, Jorgensen JA, Moullan N, Daemen S, Kersten S, Auwerx J, Hoeks J. MicroRNA-382 silencing induces a mitonuclear protein imbalance and activates the mitochondrial unfolded protein response in muscle cells. J Cell Physiol 2019; 234: 6601-6610. (IF=5.546)"],
      publist2018: ["Li H#, Wang X#, Rukina D, Huang Q, Lin T, Sorrentino V, Zhang H, Sleiman MB, Arends D, McDaid A, Luan P, Ziari N, Velázquez-Villegas LA, Gariani K, Kutalik Z, Schoonjans K, Radcliffe RA, Prins P, Morgenthaler S, Williams RW, Auwerx J. An integrated systems genetics and omics toolkit to probe gene function. Cell Systems 2018; 6: 90-102. (IF=8.673)Li H#, Wang X#, Rukina D, Huang Q, Lin T, Sorrentino V, Zhang H, Sleiman MB, Arends D, McDaid A, Luan P, Ziari N, Velázquez-Villegas LA, Gariani K, Kutalik Z, Schoonjans K, Radcliffe RA, Prins P, Morgenthaler S, Williams RW, Auwerx J. An integrated systems genetics and omics toolkit to probe gene function. Cell Systems 2018; 6: 90-102. (IF=8.673)"],
      publist2017: ["Wang X & Auwerx J. Systems phytohormone responses to mitochondrial proteotoxic stress. Molecular Cell 2017; 68: 540-51. (IF=15.584)",
              "Stein S#, Lemos V#, Xu P, Demagny H, Wang X, Ryu D, Jimenez V, Bosch F, Lüscher TF, Oosterveer MH, Schoonjans K. Impaired SUMOylation of nuclear receptor LRH-1 promotes nonalcoholic fatty liver disease. J Clin Invest. 2017; 127(2):583-592. (IF=11.864)"
      ],
    }
  },
  components: {
    gheader,
    gfooter
  }
}
</script>

<style scoped>

.year{
  float:left;
  color:tomato;
  text-align: left;
  font-size: 30px;
  font-family: "Microsoft YaHei" ! important;
  margin-bottom: 5px;
  margin-left:20px;
}
.text{
  float: left;
  line-height: 20px;
  font-size: 15px;
  text-align: left;
  margin-bottom: 5px;
  margin-left:20px;
  font-family: "Microsoft YaHei" ! important;
}
.boxcard{
  position:absolute;
  width:1400px;
  height:780px;
  left:250px;

  margin-bottom: 30px;
}
.h1{
  text-align: left;
}
.h1{
   text-align: left;
   color:tomato;
   margin-left:20px;
   margin-bottom:20px;
   width: 100%;
}
</style>
