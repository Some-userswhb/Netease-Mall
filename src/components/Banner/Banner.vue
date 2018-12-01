<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-first" v-for="(item,index) in Pic" :key="index">
        <img :src='item.picUrl'>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>

  </div>
</template>


<script>
  import Swiper from 'swiper'
  import {reqBannerImgUrl}  from '../../api/index'
   export default{
      data(){
        return{
              Pic:[]
        }
      },
      mounted(){
         //轮播
        setTimeout(() => {
          new Swiper('.swiper-container', {
            spaceBetween: 30,
            loop:true,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        },300)

        reqBannerImgUrl()
          .then(res=>{
            if(res.code===0){
              this.Pic = res.data
            console.log(this.Pic)
            }
          })
      }
   }
</script>


<style lang="less">
  @import "../../common/stylus/mixins.less";
  .swiper-container {
    width: 100%;
    height: 360/@rem;
  img{
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

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
  &.swiper-first{
     width: 100%;
     height: 100%;
     background-color: gold;
   }
  }
  }
</style>
