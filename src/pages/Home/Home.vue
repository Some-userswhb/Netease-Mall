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
      </div>
      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-first">Slide 1</div>
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

      <!--轮播图下的小公告-->
      <div>
        <ul>
          <li>
            <span></span>
            <p>网易自营品牌</p>
          </li>
        </ul>
      </div>


    </div>
</template>


<script>
  import Swiper from 'swiper'

  export default{
     mounted(){
        new Swiper('.swiper-container', {
         spaceBetween: 30,
         centeredSlides: true,
//         autoplay: {
//           delay: 2500,
//           disableOnInteraction: false,
//         },
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
         },

       });
     }
   }

</script>


<style lang="less">
  @import "../../common/stylus/mixins.less";
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
        margin: 12/@rem  15/@rem  0px 15/@rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .iconfont{
        position: absolute;
        left: 95px;
        top: 9px;
        font-size: 22px;
      }
      .headerInput{
        width: 390/@rem;
        height:60/@rem;
        border-radius: 4px;
        background-color: #EDEDED;
        font-size: 14px;
        padding-left: 65/@rem;
      }
      .headerLogin{
        width: 75/@rem;
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
      width: 1311/@rem;
      height: 60/@rem;
      font-size: 14px;
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
  }

  /*轮播图*/
  .swiper-container {
    width: 100%;
    height: 360/@rem;

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

</style>
