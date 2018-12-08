<template>
    <div class="bigWrap clearFix">
      <div class="bigContent">
        <!--标题-->
        <div class="BigLio" v-for="(good,index) in goods" :key="index">
          <p class="inHome">{{good.name}}好物</p>
          <div class="bigList">
            <ul class="bigUlList clearFix">
              <li class="bigLi" v-for="(item,index) in good.itemList" :key="index">
              <img v-lazy="item.listPicUrl" class="contentImg">
              <p class="imgMsg ellipsis">{{item.simpleDesc}}</p><br/>
              <p class="imgMsg2 ellipsis">{{item.name}}</p>
              <span class="imgMoney">{{item.retailPrice}}￥</span>
            </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
</template>

<script>
  import {reqGoodBrand} from '../../api/index'
   export default{
     data(){
        return{
          goods:[]
        }

     },
     mounted(){

       reqGoodBrand()
         .then(res => {
            if(res.code === 0){
               this.goods = res.data
              console.log( this.goods[0].itemList)
            }
         })
     }
   }
</script>

<style lang="less">
  @import "../../../src/common/stylus/mixins.less";
  .bigWrap{
    position: relative;
    top: 1630/@rem;
    width: 100%;
    height: 100%;
    .bigContent{
      position: absolute;
      left:0;
      width: 100%;
      .BigLio{
        width: 100%;
        height: 100%;
        .inHome{
          width: 100%;
          height: 50/@rem;
          text-align: center;
          display:block;
          font-size: 32/@rem;
          background-color: darkgray;
          padding-top: 16/@rem;
          padding-bottom: 14/@rem;

        }
      }
      .bigList{
        width: 100%;
        height: 100%;
        margin-bottom: 60/@rem;
        padding-bottom: 60/@rem;

        .bigUlList{
          width: 100%;
          /*height: 2500px;*/
          li{
            width:330/@rem ;
            float: left;
            margin: 20/@rem 20/@rem 10/@rem 20/@rem;
          }
          .bigLi{
             font-size: 28/@rem;
            .contentImg{
              width: 330/@rem;
              height: 345/@rem;
              background-color: #f4f4f4;
              vertical-align: top;
            }
            .imgMsg{
              display: inline-block;
              width: 320/@rem;
              height: 50/@rem;
              line-height: 50/@rem;
              background-color: #F1ECE2;
              color: #9F8A60;
              font-size: 24/@rem;
              padding-left: 10/@rem;
              margin-bottom: 10/@rem;
            }
            .imgMsg2{
              margin-bottom: 6/@rem;
            }
            .imgMoney{
              color: #b4282d;
            }
          }
        }
      }
    }
  }
</style>
