<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <swiper-bar></swiper-bar>
  </div>
</template>

<script>
  import SwiperBar from '@/components/swiper'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      SwiperBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
