<template>
<div class="banner">
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img class="ban" src="../assets/imgs/b1.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/imgs/b2.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/imgs/b3.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/imgs/b4.jpg" alt=""></swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination"  slot="pagination"></div>


    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name:'banner',
  components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
        swiperOption: {
            pagination:{
                 el:'.swiper-pagination',
                dynamicBullets:true,
                draggable: true,
                
            },
            autoplay:{
                delay:2500,
                disableOnInteraction:false
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            fadeEffect: {
                crossFade: true
            },
        
            }
         
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log('this is current swiper instance object', this.swiper)
      //切换到第一张图所需时间
      this.swiper.slideTo(1, 1000, false)
    },
    
  }

</script>
<style scoped>
.banner{
    width: 100%;
    height:auto;
    position: relative;
    overflow: hidden;

 
}
.ban{
    width: 100%;
    height: 500px;
}
</style>
