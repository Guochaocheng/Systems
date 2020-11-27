<template>
    <div class="demo-image">
        <div class="block" v-for="(name, i) in names" :key="name">
            <span class="photo">{{ name }}</span>
            <el-image
                style="width: 100px; height: 100px"
                :src="images[i]">
            </el-image>
        </div>
        <div class="people-form">
          <div class="people-item" v-for="(item, i) in peopleInfos" :key="item + i">
            <div class="base">
              <div class="name">{{item.name}}</div>
              <div class="age">{{item.age}}</div>
            </div>
            <div class="pic-wrapper" v-for="(el, index) in item.images" :key="el + index">
              <el-image
                  style="width: 100px; height: 100px"
                  :src="el[i]">
              </el-image>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import peopleJson from '@/mock/people'
export default {
  name: 'peopleimage',
  data () {
    return {
      images: ['../assets/Wangxu.jpg', '../assets/logo.png'],
      names: ['wangxu', 'logo'],
      directions: ['A', 'B'],
      mails: ['a@163', 'b@163'],
      peopleInfos: peopleJson
    }
  },
  methods: {
    getData () {
    }
  }
}
</script>
