<!-- nav bar components -->
<template>
  <nav class="navbar">
    <ul>
      <router-link tag="li" to='/' class="nav-title">Shopping Cart</router-link>
      <router-link tag='li' :to="{path:'/index',activeClass:'active'}"><span>title</span></router-link>
      <router-link tag='li' :to="{path:'/cart',activeClass:'active'}">
        <span>Market <a class='txt-num' v-text="totalItem" v-if='totalItem'></a></span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
  .navbar{
    height: 60px;
    line-height: 60px;
    background: #f0f0f0;
    margin-bottom: 20px;
    li{
      float: left;
      margin-left: 30px;
      cursor: pointer;
      span{
        padding: 0 20px;
      }
    }
    li:first-child{
      background: #f0f0f0 !important;
    }
    li:last-child{
      content: "";
      display:block;
    }
    .nav-title{
      font-size: 20px;
      opacity: .7;
    }
    .router-link-exact-active{
      background: #ccc;
    }
  }
</style>