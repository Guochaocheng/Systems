<template>
    <div class="demo-image">
        <div class="block" v-for="(name, i) in names" :key="name">
            <span class="photo">{{ name }}</span>
            <el-image
                style="width: 100px; height: 100px"
                :src="images[i]">
            </el-image>
        </div>
    </div>
</template>
<script>
export default {
  name: 'peopleimage',
  data () {
    return {
      images: ['../assets/Wangxu.jpg', '../assets/logo.png'],
      names: ['wangxu', 'logo'],
      directions: ['A', 'B'],
      mails: ['a@163', 'b@163']
    }
  }
}
</script>
