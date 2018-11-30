<template>
    <div>
      <!--头部导航 搜索-->
      <div class="homeHeader">
        <!--搜索 登录-->
        <ul class="homeList">
          <li>
            <a href="javascript:;" class="homeLogo">
              <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="">
            </a>
          </li>
          <li>
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" class="headerInput" placeholder="搜索商品，共19724款好物">
          </li>
          <li>
            <input type="button"  class="headerLogin" value="登录">
          </li>
        </ul>
        <!--导航-->
        <div class="wrapper">
          <ul class="homeNavList">
            <li class="red">
              <span>推荐</span>
            </li>
            <li>
              <span>居家</span>
            </li>
            <li>
              <span>鞋包配饰</span>
            </li>
            <li>
              <span>服装</span>
            </li>
            <li>
              <span>电器</span>
            </li>
            <li>
              <span>洗护</span>
            </li>
            <li>
              <span>饮食</span>
            </li>
            <li>
              <span>餐厨</span>
            </li>
            <li>
              <span>婴童</span>
            </li>
            <li>
              <span>文体</span>
            </li>
            <li>
              <span>特色区</span>
            </li>
          </ul>
          <!--箭头遮罩层-->
          <div class="mask" @click="ToggleMask">
            <span>
               <i class="iconfont icon-jiantou maskArrow"></i>
            </span>

            <div class="maskContent maskToggle" v-show="isshow" >
              <ul class="maskContentList">
                <li class="licolor">推荐</li>
                <li>居家</li>
                <li>鞋包配饰</li>
                <li>服装</li>
                <li>电器</li>
                <li>洗护</li>
                <li>饮食</li>
                <li>餐厨</li>
                <li>婴童</li>
                <li>文体</li>
                <li>特色区</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-first" v-for="(item,index) in Pic" :key="index">
            <img :src='item.bannerUrl'>
          </div>


        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>

      </div>

      <!--轮播图下的小公告-->
      <div class="shopDirections">
        <ul class="directionsList">
          <li>
            <span>
              <img src="http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png" alt="">
            </span>
            <p>网易自营品牌</p>
          </li>
          <li>
            <span>
              <img src="http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png" alt="">
            </span>
            <p>30天无忧退货</p>
          </li>
          <li>
            <span>
              <img src="http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png" alt="">
            </span>
            <p>48小时快速退款</p>
          </li>
        </ul>
      </div>
      <!--新人专享礼-->
      <div class="newcomerGift">
      <span class="leftLevelLine"></span>
      <span class="newComeText">新人专享礼</span>
      <span class="rightLevelLine"></span>
        <!--图片信息-->
      <div class="newGiftContent">
        <!--左侧-->
        <div class="newGiftLeft">

        <span class="newGiftName">新人专享礼包</span>
        <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png">
        </div>
        <!--右侧-->
        <div class="newGiftRight">
          <div class="rightTop"></div>
          <div class="rightBottom"></div>
        </div>

      </div>

      </div>

    </div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {reqBannerImgUrl}  from '../../api/index'
  export default{
     data(){
        return{
          isshow:false,
          Pic:[]
        }
     },
     methods:{
        //遮罩层显示
        ToggleMask(){
           this.isshow = ! this.isshow
        }
      },
     mounted(){
        //轮播
        setTimeout(() => {
          new Swiper('.swiper-container', {
            spaceBetween: 30,
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
       //滚动
        new BScroll('.wrapper',{
         scrollX: true,
         click: true
       });

       reqBannerImgUrl()
         .then(res=>{
           if(res.code===0){
             this.Pic = res.data
//             console.log(this.Pic)
           }
         })





     }
   }

</script>

<style lang="less">
  @import "../../common/stylus/mixins.less";
  /*头部*/
  .homeHeader{
    width: 100%;
    height: 87/@rem;
    /*头部logo 搜索框 登录按钮*/
    .homeList{
      position: relative;
      width: 100%;
      height: 88/@rem;
      line-height: 56/@rem;
      margin-bottom: 15/@rem;
      li{
        float: left;
        margin-top: 10/@rem;
        }
      .homeLogo{
        display: block;
        width: 138/@rem;
        height: 40/@rem;
        margin: 12/@rem  15/@rem  0 15/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .iconfont{
        position: absolute;
        left: 195/@rem;
        top: 20/@rem;
        font-size: 44/@rem;
      }
      .headerInput{
        width: 390/@rem;
        height:60/@rem;
        border-radius: 4px;
        background-color: #EDEDED;
        font-size: 14/@rem;
        padding-left: 65/@rem;
      }
      .headerLogin{
        width: 90/@rem;
        height: 42/@rem;
        font-size: 12px;
        border-radius: 5px;
        color: #B22531;
        border: 1px solid #B22531;
        background-color: white;
        margin-top: 18/@rem;
        margin-left: 15/@rem;
      }
    }
    /*头部导航*/
    .homeNavList{
      position: relative;
      width: 1311/@rem;
      height: 60/@rem;
      font-size: 14/@rem;
      li{
        float: left;
        margin-left: 30/@rem;
        padding: 0/@rem 12/@rem;
        height: 40/@rem;
      }
      .red{
        color: #BB3E48;
        border-bottom: 2px solid #BB3E48;
      }
    }
    .mask{
      width: 100/@rem;
      height: 60/@rem;
      background-color: white;
      position: absolute;
      right: -1px;
      top: 44px;
      text-align: center;
      line-height: 60/@rem;
      box-shadow: -10px 0 14px white;
      /*z-index: 10;*/
      .maskContent{
        width: 750/@rem;
        height: 300/@rem;
        background-color: #fff;
        position: absolute;
        left: -326px;
        top: 30px;
        z-index: 20;
        li{
          width: 150/@rem;
          height: 56/@rem;
          border: 1px solid #F1F1F1;
          margin: 12px 5px 5px 10px;
          font-size: 12px;
          float: left;
          border-radius: 2px;
          background-color: #FAFAFA;
          &.licolor{
            border: 1px solid #C0505A;
            color: #C0505A;
          }

        }
      }

    }
  }
  /*轮播图*/
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
  /*轮播图下的小公告*/
  .shopDirections{
    width: 100%;
    height: 45/@rem;
    /*background-color: grey;*/
    padding-top: 27/@rem;
    border-bottom: 5px solid #F4F4F4;
    .directionsList{
      width: 100%;
      height: 36/@rem;
      /*background-color: blue;*/
      li{
        float: left;

        height: 31/@rem;
        width: 28% ;
        padding-left: 13px;
        span{
          width: 32/@rem;
          height:32/@rem;
          float: left;
          img{
            float: left;
            width: 100%;
            height: 100%;
          }
        }
        p{
          font-size: 18/@rem !important;
          margin-top: 2px;
          white-space: nowrap ;
        }
      }

    }
  }
  /*新人专享礼*/
  .newcomerGift{
    width: 100%;
    height: 90/@rem;
    background-color: grey;
    text-align: center;
    line-height: 90/@rem;
    .newComeText{
      font-size: 18px;
    }
    .leftLevelLine{
      display: inline-block;
      width: 28/@rem;
      height: 3/@rem;
      background-color: black;
      margin-bottom: 5px;
      margin-right: 2px;
    }
    .rightLevelLine{
      display: inline-block;
      width: 28/@rem;
      height: 3/@rem;
      background-color: black;
      margin-bottom: 5px;
    }
    .newGiftContent{
      width: 100%;
      height:437/@rem;
      background-color: rebeccapurple;
      .newGiftLeft{
        float: left;
        width: 50%;
        height: 100%;
        background-color: red;
        .newGiftName{
          font-size: 16px;
        }
        .img{
          width: 228/@rem;
          height: 228/@rem;
        }

      }
      .newGiftRight{
        float: right;
        width: 50%;
        height: 100%;
        background-color: gray;
      }
    }
  }

</style>
