<template>
    <div style="background-color: #F4F4F4; height:6000px" class="warpScroll">
      <!--头部导航 搜索-->
      <div class="homeHeader">
        <!--搜索 登录-->
        <ul class="homeList">
          <li @click="goto('./loginmask')">
            <a href="javascript:;" class="homeLogo">
              <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="">
            </a>
          </li>
          <li>
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" class="headerInput" placeholder="搜索商品，共19724款好物">
          </li>
          <li>
            <input type="button"  class="headerLogin" value="登录" @click="goto('/personal')">
          </li>
        </ul>
        <!--导航-->
        <div class="wrapper" ref="wrapper">
          <ul class="homeNavList">
            <li v-for="(item,index) in navList"
                :key="index"
                :class="{'red':isred === index}"
                @click="gbColor(index)">
              <span>{{item}}</span>
            </li>

          </ul>
          <!--箭头遮罩层-->
          <div class="mask" >
             <span @click="ToggleMask" :class="{rotate:isrotate}">
                   <i class="iconfont icon-jiantou"></i>
             </span>


            <div class="maskContent maskToggle" v-show="isshow" >
              <ul class="maskContentList">
                <li  v-for="(name,index) in navList"
                     :key="index"
                     :class="{'red':maskRed === index}"
                     @click="MaskColor(index)"
                >{{name}}</li>

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
          <!--专题精选-->
         <Featured/>
          <!--好物列表-->
         <BigBrandList/>
      </div>
      <!--大遮罩层-->
      <div></div>

    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Banner from '../../components/Banner/Banner.vue'
  import BrandItem from '../../components/BrandItem/BrandItem.vue'
  import NewProduct from '../../components/NewProduct/NewProduct.vue'
  import Featured from '../../components/Featured/Featured.vue'
  import BigBrandList from '../../components/BigBrandList/BigBrandList.vue'
  export default{
     components:{
       Banner,//注册轮播图组件
       BrandItem,//注册品牌直供组件
       NewProduct,//新品首发组件
       Featured, //
       BigBrandList,
     },
     data(){
        return{
          isshow:false,
          isred:0,
          maskRed:0,
          navList:["推荐","居家","鞋包配饰","服装","电器","洗护","饮食","餐厨","婴童","文体","特色区"],
          isrotate:false
        }
     },
     methods:{
        //遮罩层显示
        ToggleMask(){
         this.isshow = ! this.isshow
          this.isrotate = !this.isrotate
       },
       //导航点击变色
       gbColor(index){
          this.isred = index
       },
       MaskColor(index){

          this.maskRed = index
       },
       goto(path){
         this.$router.replace(path)
       },


      },
     mounted(){

       new BScroll('.wrapper',{
         scrollX: true,
         click: true
       })



     }
   }

</script>

<style lang="less">
  @import "../../common/stylus/mixins.less";
  /*头部*/


.warpScroll{
  width: 100%;
  height: 100%;
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
        font-size: 42/@rem;
      }
      .headerInput{
        width: 390/@rem;
        height:60/@rem;
        border-radius: 8/@rem;
        background-color: #EDEDED;
        font-size: 26/@rem;
        padding-left: 65/@rem;
      }
      .headerLogin{
        width: 90/@rem;
        height: 42/@rem;
        font-size: 24/@rem;
        border-radius: 10/@rem;
        color: #B22531;
        border: 2/@rem solid #B22531;
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
      }
      .red{
        color: #BB3E48;
        border-bottom: 4/@rem solid #BB3E48;
      }

    }
    /*遮罩层*/
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
      span{
        display: block;
      }
      .rotate{
        display: inline-block;
        transform: rotate(180deg);
        transition: 1s;
      }

      .maskContent{
        width: 750/@rem;
        height: 300/@rem;
        background-color: #fff;
        position: absolute;
        left: -652/@rem;
        top: 60/@rem;
        z-index: 20;
        .maskContentList{
          width: 100%;
          height: 100%;

        }
        .red{
          color: red;
          border-left:4/@rem solid red ;
          border-right:4/@rem solid red ;
        }
        li{
          width: 148/@rem;
          height: 50/@rem;
          line-height: 54/@rem;
          border: 2/@rem solid #F1F1F1;
          margin: 22/@rem 9/@rem 9/@rem 18/@rem;
          font-size: 24/@rem;
          float: left;
          border-radius: 4/@rem;
          background-color: #FAFAFA;

          &.licolor{
            border: 2/@rem solid #C0505A;
            color: #C0505A;
          }

        }
      }

    }
  }
  .pageScroll{
    width: 100%;
    height: 1100/@rem;
    position: relative;
    top: 148/@rem;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
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
        font-size: 32/@rem;
      }
      .leftLevelLine{
        display: inline-block;
        width: 28/@rem;
        height: 3/@rem;
        background-color: black;
        margin-bottom: 10/@rem;
        margin-right: 4/@rem;
      }
      .rightLevelLine{
        display: inline-block;
        width: 28/@rem;
        height: 3/@rem;
        background-color: black;
        margin-bottom: 10/@rem;
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
            margin-top: 20/@rem;
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
            border-bottom: 3/@rem solid white;
            position: relative;
            img{
              position: absolute;
              width: 180/@rem;
              height: 180/@rem;
              left: 188/@rem;
              top: 36/@rem;
            }
            .rightText{
              white-space: normal;
              width: 120/@rem;
              height: 180/@rem;
              margin-left: 40/@rem;
              .today{
                font-size: 24/@rem;
                color: gray;
              }
              .welfare{
                display: block;
                margin-bottom: -50/@rem;

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
              left: 188/@rem;
              top: 36/@rem;
            }
            .rightText{
              width: 120/@rem;
              height: 180/@rem;
              margin-left: 15/@rem;
              .oneYuan{
                font-size: 24/@rem;
                color: gray;
                background-color:#CAB695;
                color: white;
                padding: 0 4/@rem;
                border-radius: 6/@rem;
              }
              .newComer{
                font-size: 30/@rem;
                display: block;
                width: 138/@rem;
                margin-bottom: -50/@rem;

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
      top: 2410/@rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
