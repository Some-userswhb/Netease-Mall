<template>

    <div>
      <WeHeader/>
      <!--滚动-->
      <div class="ledge-wrap-scroll" style="background-color: #F4F4F4">
        <!--大轮播-->
        <div class="swiper-container" id="banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in BannerMsg" :key="index">
              <img :src="item.picUrl" alt="">
              <div class="item-content">
                <p>——{{item.subTitle}}——</p>
                <p>{{item.title}}</p>
                <p>{{item.desc}}</p>
              </div>
            </div>
          </div>
        </div>
        <!--小轮播-->

        <div class="navListcontent">
          <div class="swiper-container" id="navlist">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in smallBanner" :key="index">
                <img :src="item.picUrl">
                <p>{{item.title}}</p>
                <span class="count">{{item.articleCount}}</span>
              </div>
            </div>
          </div>
        </div>

          <!--为你推荐-->
        <div class="ledge-textContent">
          <h5>为你推荐</h5>
          <div class="content-whiteboy">
            <img src="https://yanxuan.nosdn.127.net/09d83c97c9963495e6518cfbec776b4c.jpg" alt="">
            <span class="floleft">如何做清新的白衣少年</span>
            <span class="figright">9.9元起</span>
            <p class="manjian">少年感养成必备好物,每满149立减20</p>
          </div>

          <div class="World-cup">
            <div class="left-text">
              <p>今年世界杯喝什么?</p>
              <p>拉格啤酒8.5折，买即送小...</p>
            </div>
            <div class="right-img">
              <img src="https://yanxuan.nosdn.127.net/7af712a2e7af35c752a45ab1451c33a2.jpg" alt="">
              <span>丁磊的好货推荐</span>
            </div>
          </div>
          <div class="World-cup">
            <div class="left-text">
              <p>没有软木拖,怎么过...</p>
              <p>买了新款软木拖的用户陆续...</p>
            </div>
            <div class="right-img">
              <img src="https://yanxuan.nosdn.127.net/1153af5311f4cee51141f1228cfcf996.jpg" alt="">
              <span>挑款师推荐</span>
            </div>
          </div>
        </div>

        <TodayTopic/>
        <BigList/>
        <YanLook/>



      <!--滚动-->
      </div>

    </div>
</template>


<script>
  import  WeHeader from '../../components/WeHeader/WeHeader.vue'
  import {mapState} from 'vuex'
  import   Swiper from 'swiper'
  import  TodayTopic from '../../components/TodayTopic/TodayTopic.vue'
  import  BigList  from './BigList/BigList.vue'
  import  YanLook from './YanLook/YanLook.vue'
   export default{

     components:{
       WeHeader, //注册头部组件
       TodayTopic, //今日话题
       BigList,
       YanLook
     },
     computed:{
       ...mapState(['BannerMsg']),
       ...mapState(['smallBanner'])
     },
     mounted(){
       this.$store.dispatch('getThreeBanner');
       this.$store.dispatch('getSmallBanner');
       //轮播图配置

       setTimeout(() => {
        let banner =  new Swiper('#banner', {
           slidesPerView: 1,
           spaceBetween: 25,
           freeMode: true,
           pagination: {
             el: '.swiper-pagination',
             clickable: true,
           },
         });
       },700)

       setTimeout(() => {
         let swiper = new Swiper('#navlist', {
           slidesPerView: 3.4,
           spaceBetween: 20,

         });
       },700)
     }
   }
</script>


<style lang="less">
  @import "../../../src/common/stylus/mixins.less";
  .ledge-wrap-scroll{
    width: 100%;
    height: 1240/@rem;
    overflow-y: scroll;
    overflow-x: hidden;


    -webkit-overflow-scrolling: touch;
    /*大轮播*/
    #banner {
      width: 100%;
      height: 400/@rem;
      background-color: white;
      padding-bottom: 40/@rem;
      margin-top: 100/@rem;
      .item-content{
        opacity: 0.8;
        width: 466/@rem;
        height: 180/@rem;
        background-color: #EDF0EF;
        position: absolute;
        left:50%;
        margin-left: -233/@rem;
        top: 50%;
        margin-top: -94.5/@rem;
        text-align: center;
        padding-top: 20px;
        p:nth-child(1){
          color: #7F7F7F;
          font-size: 10/@rem;
        }
        p:nth-child(2){
          padding-top: 10px;
          color: black;
          font-size: 40/@rem;
          font-weight: bold;
        }
        p:nth-child(3){
          padding-top: 5px;
          color: black;
          font-size: 10/@rem;
        }
      }
      .swiper-slide {
        text-align: center;
        font-size: 36/@rem;
        /*background: gold;*/
        width: 400/@rem;
        height: 400/@rem;
        img{
          border: 2/@rem solid #999;
          width: 90%;
          height: 90%;
          border-radius: 4px;
        }

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
    }
    /*小轮播*/
    .navListcontent{
        width: 100%;
      .swiper-container {
        background-color: white;
        width: 100%;
        height: 100%;
        .swiper-wrapper{
          padding-left: 34/@rem;
        }
        .swiper-slide {
          text-align: center;
          font-size: 36/@rem;
          width: 180/@rem !important;
          height: 260/@rem;
          display: flex;
          flex-direction:column;
          position: relative;
          img{
            width: 100%;
            height: 180/@rem;
            margin-top: -44/@rem;
            margin-bottom: 24/@rem;
          }
          p{
            font-size: 24/@rem;
          }
          .count{
            position: absolute;
            right: 0;
            top: 0;
            color: white;
            background-color: #C3C3C2;
            font-size: 24/@rem;
          }
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
      }

    }
    /*白衣boy*/
    .ledge-textContent{
      width: 750/@rem;
      height: 1400/@rem;
      background-color: white;
      padding-left: 13px;
      h5{
        text-align: center;
        font-size: 30/@rem;
        margin-bottom: 30/@rem;
        padding-top: 40/@rem;
      }
      .content-whiteboy{
        width:690/@rem;
        height: 569/@rem;
        border-radius: 3px;
        border: 1px solid #d9d9d9;
        background-color: #FFFFFF;
        margin-bottom: 20px;
        img{
          width: 100%;
          height: 200px;
        }
        .floleft{
          font-size: 18px;
          float: left;
          margin-left: 10px;
          margin-bottom: 10px;
        }
        .figright{
          font-size: 16px;
          float: right;
          margin-right: 10px;
        }
        .manjian{
          font-size: 14px;
          margin-left: 10px;
          float: left;
          color: #7f7f7f;
        }

      }
      .World-cup{
        width:690/@rem;
        height: 274/@rem;
        /*background-color: gold;*/
        border: 2/@rem solid #d9d9d9;
        font-size: 14px;
        margin-bottom: 16px;
        .left-text{
          float: left;
          width: 408/@rem;
          height: 274/@rem;

          p:nth-child(1){
            font-size: 16px;
            margin-top: 45px;
            margin-left: 10px;
          }
          p:nth-child(2){
            font-size: 14px;
            color: #7e8c8d;
            margin-top: 2px;
            margin-left: 10px;
          }

        }
        .right-img{
          float: left;
          width: 282/@rem;
          height: 100%;
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          span{
            position: absolute;
            left: 5px;
            top: 10px;
            background-color: whitesmoke;
            border-radius: 6px;
            font-size: 12px;
            padding: 0 8px;
          }
        }

      }


    }

  }




</style>
