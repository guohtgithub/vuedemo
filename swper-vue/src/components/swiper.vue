<!-- swiper page component -->
<template>
  <div>
    <div class="two swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="swiper-container one">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    data () {
      return {
      };
    },
    methods: {},
    mounted(){
      new Swiper('.two',{
        loop:true,
        pagination:'.swiper-pagination',
        nextButton:'.swiper-button-next',
        prevButton:'.swiper-button-prev'
      })
      new Swiper('.one', {
        loop:true,
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        centeredSlides: false,
        paginationClickable: true,
        spaceBetween: 30
      });

    }
  }
</script>
<style scoped>
  .two{
    width: 500px;
    height: 300px;
    margin: 20px auto;
  }
  .one {
    width: 100%;
    height: 300px;
    margin: 20px auto;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    width: 60%;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide:nth-child(2n) {
    width: 40%;
  }
  .swiper-slide:nth-child(3n) {
    width: 20%;
  }
</style>