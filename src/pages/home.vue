<template>
    <div class="home">
    <v-introduction> </v-introduction>
    </div>
</template>

<script>
import introduction from '../components/introduction'
export default{
  name: 'home',
  data () {
    return {}
  },
  components: {
    'v-introduction': introduction
  }
}
</script>

<style scoped>
</style>
