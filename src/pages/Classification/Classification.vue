<template>
    <div class="two-wrap">
      <!--头部-->
        <div class="two-header">
          <div class="header-sou" @click="goto('/searchgoods')">
            <i class="iconfont icon-sousuo1"></i>
            <span>搜索商品,共19714款好物</span>
          </div>
        </div>
      <!--内容区-->
      <div class="two-content">
        <!--左侧导航-->
        <div class="left-nav">
          <ul class="left-nav-list">
            <li v-for="(list,index) in leftnavlist" :key="index" :class="{'clickcolor':istrue === index}" @click="addstyle(index)">
              {{list.name}}
            </li>

          </ul>
        </div>
        <!--右侧内容-->
        <div class="right-wrap" v-show="rightUl">
          <!--v-for="(img,index) in leftnavlist" :key="index"-->
          <div class="right-header" v-if="rightUl">
            <img :src="rightUl.bannerUrl" alt="右侧图片">
          </div>
          <div class="right-content">
            <p class="content-title">居家</p>
            <div class="content-picmsg">
              <ul class="content-list" v-if="rightUl">

                <li class="content-item" v-for="(limsg,index) in rightUl.subCateList" :key="index">
                  <img :src="limsg.wapBannerUrl" alt="" class="content-img">
                  <p>{{limsg.name}}</p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>

</template>


<script>
  import {mapState} from 'vuex';

   export default{
     data(){
       return{
         istrue:0
       }
     },
     computed:{
       ...mapState(['leftnavlist']),
       rightUl(){
         return this.leftnavlist[this.istrue]
       }

     },
     methods:{
       addstyle(index){
         this.istrue = index
       },
       goto(path){
         this.$router.push(path)
       }
     },
      mounted(){
         this.$store.dispatch('getleftNavList')
        console.log(this.leftnavlist)

      }
   }
</script>


<style lang="less">
  @import "../../common/stylus/mixins.less";
  .two-wrap{
    width: 100%;
    height: 1236/@rem;
    /*头部*/
    .two-header{
      width: 100%;
      height: 76/@rem;
      background-color: white;
      padding-top: 14/@rem;
      border-bottom: 2/@rem solid #7e8c8d;
      .header-sou{
        width: 664/@rem;
        background-color: #ededed;
        height: 56/@rem;
        text-align: center;
        line-height: 56/@rem;
        margin: 0 auto;
        font-size: 28/@rem;
        color: #666;
        border-radius: 6/@rem;
      }
    }
    /*内容区*/
    .two-content{
      width: 100%;
      height: 100%;
      /*左侧*/
      .left-nav{
        float: left;
        text-align: center;
        font-size: 28/@rem;
        width: 166/@rem;
        height: 1200/@rem;
        /*background-color: gold;*/
        border-right:2/@rem solid #666;
        overflow-x: hidden;
        overflow-y: hidden;
        /*滚动条加速器*/
        -webkit-overflow-scrolling: touch;
        .left-nav-list{
          li{
            width: 100%;
            height: 60/@rem;
            margin: 28/@rem 0px;

          }
          .clickcolor{
            color: #b4282d;
            font-size: 32/@rem;
            font-weight: bold;
            border-left: 6/@rem solid #b4282d;
          }
          .nav-red{
            color: red;
            font-size: 38/@rem;
            border-left: 4/@rem solid red;
          }
        }
      }
      /*右侧*/
      .right-wrap{
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        float: left;
        width: 580/@rem;
        height: 100%;
        background-color: white;
        .right-header{
          width: 528/@rem;
          height: 170/@rem;
          padding-left: 26/@rem;
          padding-top: 26/@rem;
          margin-bottom: 20/@rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .right-content{
          width: 100%;
          height: 932/@rem;
          padding-left: 12/@rem;
          .content-title{
            padding-top: 20/@rem;
            text-align: center;
            font-size: 32/@rem;
            margin-bottom: 40/@rem;
          }
          .content-picmsg{
            width: 100%;
            height: 100%;
            background-color: white;
            .content-list{
              margin-left: 12/@rem;
              width: 100%;
              height: 100%;
              li{
                float: left;
                margin-right: 70/@rem;
                margin-bottom: 40/@rem;
              }
              .content-item{
                width: 120/@rem;
                height: 200/@rem;
                background-color: white;
                .content-img{
                  display: block;
                    width: 100%;
                    height: 120/@rem;
                    background-color: darkgray;
                    border-radius: 50%;
                    margin-bottom: 20/@rem;
                }
                p{
                  text-align: center;
                  font-size: 20/@rem;

                }
              }

            }
          }
        }
      }
    }
  }

</style>
