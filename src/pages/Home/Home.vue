<template>
    <div style="background-color: #F4F4F4; height:2000px" class="warpScroll">
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
      <!--内容区-->
        <div class="pageScroll">
         <!--轮播图-->
         <Banner/>
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

        <span style="font-size: 16px;">新人专享礼包</span>
        <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png">
        <span class="arrowAnimation"></span>
        </div>
        <!--右侧-->
        <div class="newGiftRight">
          <div class="rightTop">
            <div class="rightText">
              <span class="welfare">福利社</span>
              <span class="today">今日特价</span>
            </div>
            <img src="https://yanxuan.nosdn.127.net/253b643bba92ee43d541d0b9ec9ed487.png">

          </div>
          <div class="rightBottom">
            <div class="rightText">
              <span class="newComer">新人拼团</span>
              <span class="oneYuan">1元起包邮</span>
            </div>
            <img src="https://yanxuan.nosdn.127.net/1a3caca777017b5c595e6a9587a5cfc1.png" alt="">

          </div>
        </div>

      </div>

      </div>
         <!--品牌制造商直供-->
         <BrandItem/>
         <!--新品首发  -->
         <NewProduct/>
         <!--福利社-->
         <div class="welfareClub">
           <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
         </div>
         <Featured/>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Banner from '../../components/Banner/Banner.vue'
  import BrandItem from '../../components/BrandItem/BrandItem.vue'
  import NewProduct from '../../components/NewProduct/NewProduct.vue'
  import Featured from '../../components/Featured/Featured.vue'
  export default{
     components:{
       Banner,//注册轮播图组件
       BrandItem,//注册品牌直供组件
       NewProduct,//新品首发组件
       Featured, //
     },
     data(){
        return{
          isshow:false,
        }
     },
     methods:{
        //遮罩层显示
        ToggleMask(){
           this.isshow = ! this.isshow
        },

      },
     mounted(){
       new BScroll('.wrapper',{
         scrollX: true,
         click: true
       });

     }
   }

</script>

<style lang="less">
  @import "../../common/stylus/mixins.less";
  /*头部*/

  .homeHeader{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 160/@rem;
    z-index: 30;
    background-color: white;

    /*头部logo 搜索框 登录按钮*/
    .homeList{
      position: relative;
      width: 100%;
      height: 88/@rem;
      line-height: 56/@rem;
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
      padding-top: 15/@rem;
      position: relative;
      width: 1400/@rem;
      height: 40/@rem;
      font-size: 28/@rem;
      background-color: white;
      li{
        float: left;
        margin-left: 30/@rem;
        padding: 0 12/@rem;
        height: 50/@rem;
        span{

        }
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
      top: 80/@rem;
      text-align: center;
      line-height: 60/@rem;
      box-shadow: -22/@rem 0 52/@rem white;
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
  .pageScroll{
    position: relative;
    top: 74px;
  }
  /*轮播图下的小公告*/
  .shopDirections{
    width: 100%;
    height: 45/@rem;
    padding-top: 24/@rem;
    margin-bottom: 20/@rem;
    background-color: white;
    .directionsList{
      width: 100%;
      height: 36/@rem;
      li{
        float: left;
        height: 31/@rem;
        width: 28%;
        padding-left: 26/@rem;
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
          font-size: 24/@rem !important;
          white-space: nowrap;
        }
      }

    }
  }
  /*新人专享礼*/
  .newcomerGift{
    width: 100%;
    height: 90/@rem;
    background-color: white;
    text-align: center;
    line-height: 90/@rem;
    .newComeText{
      font-size: 16px;
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
      background-color: white;
      .newGiftLeft{
        float: left;
        width: 50%;
        height: 100%;
        background-color: #F9E9D0;
        position: relative;
        .arrowAnimation{
          width: 36/@rem;
          height: 20/@rem;
          position: absolute;
          left: 224/@rem;
          top: 325/@rem;
          background: url("//yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png") no-repeat;
          background-size: 100% 100%;
        }
        img{
          margin-top: 20px;
          width: 228/@rem;
          height: 228/@rem;
        }

      }
      .newGiftRight{
        float: right;
        width: 50%-0.8;
        height: 100%;
        background-color: gray;
        .rightTop{
          font-size: 32/@rem;
          width: 100%;
          height: 50%-0.5;
          background-color: #FAE2D4;
          border-bottom: 1.5px solid white;
          position: relative;
          img{
            position: absolute;
            width: 180/@rem;
            height: 180/@rem;
            left: 94px;
            top: 18px;
          }
          .rightText{
            width: 60px;
            height: 90px;
            margin-left: 20px;
            .today{
              font-size: 12px;
              color: gray;
            }
            .welfare{
              display: block;
              margin-bottom: -25px;

            }
          }


        }

        .rightBottom{
          font-size: 30/@rem;
          width: 100%;
          height: 50%;
          background-color: #FEECC4;
          position: relative;
          img{
            position: absolute;
            width: 180/@rem;
            height: 180/@rem;
            left: 94px;
            top: 18px;
          }
          .rightText{
            width: 60px;
            height: 90px;
            margin-left: 20px;
            .oneYuan{
              font-size: 12px;
              color: gray;
              background-color:#CAB695;
              color: white;
              padding: 0 2px;
              border-radius: 3px;
            }
            .newComer{
              display: block;
              margin-bottom: -25px;

            }
          }
        }
      }
    }
  }
  /*福利社*/
  .welfareClub{
    width: 100%;
    height: 300/@rem;
    position: absolute;
    top: 2390/@rem;
    img{
      width: 100%;
      height: 100%;
    }
  }

</style>
