<!-- Index page -->
<template>
  <div class="container">
    <div class="info">
      <img :src="this.$store.state.iphone.activeStyleUrl" alt="">
    </div>
    <div class="info">
      <h3 class='name'><span>{{this.$store.state.iphone.name}}</span></h3>
      <hr>
      <div class="options">
        <dl class="dl-horizontal">
          <dt>描述：</dt>
          <dd><span>{{this.$store.state.iphone.desc}}</span></dd>
        </dl>
        <dl class='price dl-horizontal'>
          <dt>价格：</dt>
          <dd class="pomegranage">
            <strong>￥<span>{{this.$store.state.iphone.price}}</span></strong>
          </dd>
          <dl class='option dl-horizontal'>
            <dt>外观：</dt>
            <dd>
              <ul>
                <li></li>
              </ul>
            </dd>
          </dl>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  }
}

</script>
<style lang='scss' scoped>
  .container{
    width: 1170px;
    margin: 0 auto;
    // background: #000;
    display: flex;
    .info{
      flex: 1;
      img{
        border: 1px solid #f0f0f0;
        border-radius: 5px;
      }
    }
  }
</style>