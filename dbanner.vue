<template>
<div class="banner">
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img class="ban" src="../assets/fimg/1.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/fimg/2.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/fimg/3.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/fimg/4.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/fimg/5.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/fimg/6.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/fimg/7.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/fimg/8.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/fimg/9.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/fimg/11.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="ban" src="../assets/fimg/12.jpg" alt=""></swiper-slide>
   

    <!-- 分页器 -->
   


   
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name:'dbanner',
  components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
        swiperOption: {
            slidesPerView: 9,
      spaceBetween: 30,
      loop: true,
            pagination:{
                 el:'.swiper-pagination',
                dynamicBullets:true,
                draggable: true,
                
            },
            autoplay:{
                delay:1500,
                disableOnInteraction:false
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
    height: 500px;
}
.ban{
    width: 100%;
    height: 100px;
    border-radius: 2px; 
}
</style>
