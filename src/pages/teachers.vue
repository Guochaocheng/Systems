<template>
    <div class="publications">
        <!-- <v-header></v-header>
        <el-container class="main">
        </el-container>
        <v-footer></v-footer> -->
        <div style="width:1100px">
            <div style="width:100%;height:100px;text-align:left;font:bold 35px Arial,Helvetica,sans-serif;line-height:100px" >People</div>
            <div style="width:100%;height:1px;background:#CCCCCC" ></div>
            <div style="width:100%;height:20px;"></div>
            <div class="peopletype">Principle Investigator </div>
            <div style="width:100%;height:2px;background:#CCCCCC" ></div>
            <div class="peopleboxbig"><div class="peopleshadowbig">
                <div class="peoplephoto"><img class="peopleimage" src="../assets/Wangxu.jpg" alt=""></div>
                <div class="peoplenameshadowbig"><div class="peoplemail">Wang Xu<br/>Professor<br>xu.wang@sjtu.edu.cn</div></div>
            </div></div>
            <!-- Research Assistants Professor -->
            <div style="width:100%;height:2px;background:#CCCCCC" ></div>
            <div style="width:100%;height:20px;"></div>
            <div class="peopletype">Research Assistants Professor</div>
            <div style="width:100%;height:2px;background:#CCCCCC" ></div>
            <div class="peopleboxbig">
                <div class="peopleshadow">
                    <div class="peoplephoto"><img class="peopleimage" src="../assets/Wangxu.jpg" alt=""></div>
                    <div class="peoplenameshadow"><div class="peoplemail" >Wang Xu<br/>Professor<br>xu.wang@sjtu.edu.cn</div></div>
                </div>
                <div class="peopleshadow">
                    <div class="peoplephoto"><img class="peopleimage" src="../assets/Wangxu.jpg" alt=""></div>
                    <div class="peoplenameshadow"><div class="peoplemail">Wang Xu<br/>Professor<br>xu.wang@sjtu.edu.cn</div></div>
                </div>
            </div>
            <div class="peopleboxbig">
                <div class="peopleshadow">
                        <div class="peoplephoto"><img class="peopleimage" src="../assets/Wangxu.jpg" alt=""></div>
                        <div class="peoplenameshadow"><div class="peoplemail" >Wang Xu<br/>Professor<br>xu.wang@sjtu.edu.cn</div></div>
                </div>
            </div>
            <!-- Research Assistants Professor -->

            <!-- PhD students -->
            <div style="width:100%;height:2px;background:#CCCCCC" ></div>
            <div style="width:100%;height:20px;"></div>
            <div class="peopletype">Ph.D Students</div>
            <div style="width:100%;height:2px;background:#CCCCCC" ></div>
            <div class="peopleboxbig">
                <div class="peopleshadow">
                    <div class="peoplephoto"><img class="peopleimage" src="../assets/Wangxu.jpg" alt=""></div>
                    <div class="peoplenameshadow"><div class="peoplemail" >Wang Xu<br/>Professor<br>xu.wang@sjtu.edu.cn</div></div>
                </div>
                <div class="peopleshadow">
                    <div class="peoplephoto"><img class="peopleimage" src="../assets/Wangxu.jpg" alt=""></div>
                    <div class="peoplenameshadow"><div class="peoplemail">Wang Xu<br/>Professor<br>xu.wang@sjtu.edu.cn</div></div>
                </div>
            </div>
            <!--  PhD students -->

            <!-- Master students -->
            <div style="width:100%;height:2px;background:#CCCCCC" ></div>
            <div style="width:100%;height:20px;"></div>
            <div class="peopletype">M.S. Students</div>
            <div style="width:100%;height:2px;background:#CCCCCC" ></div>
            <div class="peopleboxbig">
                <div class="peopleshadow">
                    <div class="peoplephoto"><img class="peopleimage" src="../assets/Wangxu.jpg" alt=""></div>
                    <div class="peoplenameshadow"><div class="peoplemail" >Wang Xu<br/>Professor<br>xu.wang@sjtu.edu.cn</div></div>
                </div>
                <div class="peopleshadow">
                    <div class="peoplephoto"><img class="peopleimage" src="../assets/Wangxu.jpg" alt=""></div>
                    <div class="peoplenameshadow"><div class="peoplemail">Wang Xu<br/>Professor<br>xu.wang@sjtu.edu.cn</div></div>
                </div>
            </div>
            <div class="peopleboxbig">
                <div class="peopleshadow">
                        <div class="peoplephoto"><img class="peopleimage" src="../assets/Wangxu.jpg" alt=""></div>
                        <div class="peoplenameshadow"><div class="peoplemail" >Wang Xu<br/>Professor<br>xu.wang@sjtu.edu.cn</div></div>
                </div>
            </div>
            <!-- Master students -->
        </div>

    </div>
</template>

<script>
import header from '../components/header'
import footer from '../components/footer'
import peopleimage from '../components/peopleimage'
export default {
  name: 'students',
  data () {
    return {}
  },
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-peopleimage': peopleimage
  }
}
</script>

<style scoped>
.photo{
    width:40px;
    height:40px;
}

.peopletype{width:100%;height:60px;text-align:left;font:200 30px 'Times New Roman',Times,serif}
.peopleshadowbig{width:100%; height:300px; background:#F7F7F7;margin:25px 0px 25px 0px;}
.peopleshadow{width:545px; height:280px; background:#F7F7F7;margin:25px 5px 25px 0px;float:left;}
.peopleboxbig{width:100%;text-align:left;overflow:hidden;}
.peoplebox{width:545px;text-align:left;overflow:hidden;}
.peoplephotobig{width:220px;height:300px;overflow:hidden;margin:10px; margin-top:25px;float:left;text-align:center}
.peoplephoto{width:180px;height:250px;overflow:hidden;margin-top:15px;margin-left:10px;float:left;text-align:center;}
.peopleimage{height:250px; margin :0 -100%;}
.peoplenameshadowbig{margin:50px 0px 0px 20px;width:500px;float:left;}
.peoplenameshadow{margin:30px 0px 0px 20px;width:325px;float:left;}
/*.peopletype{font-family: 'Times New Roman', Times, serif; font-size: 20px; line-height: 30px; color: rgb(0, 176, 80); font-weight: 600;}*/
.peoplemail{font-family: 'Times New Roman', Times, serif; font-size: 20px;margin-top:40px;margin-left: 20px;}

</style>
