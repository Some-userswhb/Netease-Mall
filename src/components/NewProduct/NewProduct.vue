<template>
    <div class="wrap">
      <div class="newProduct">
        <header class="newHeader">
           <span class="newText">新品首发</span>
           <br/>
           <button class="newBtn">
             查看全部
             <i class="iconfont icon-jiantou2"></i>
           </button>
        </header>

        <div class="newProductBanner">
          <ul class="newProductList">
            <li class="firstItem" v-for="(item,index) in Msg" :key="index" >
              <div class="imgWrap">
                <img :src="item.listPicUrl" alt="firstItem">
              </div>
              <span class="new">新品</span>
              <p class="newTitle ellipsis">{{item.name}}</p>
              <span class="newTitleColor ellipsis">{{item.simpleDesc}}</span>
              <span class="newPrice">{{item.retailPrice}}￥</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {reqNewMsg} from '../../api/index'
   export default{
     data(){
       return{
          Msg:[]
       }
     },
     mounted(){

      //请求数据
       reqNewMsg()
         .then(res=>{
           if(res.code===0){
             this.Msg = res.data
             console.log(this.Msg)
           }
         });

     const newProductBanner =  new BScroll('.newProductBanner',{
        scrollX: true,
        click: true
       })
     }


   }
</script>


<style lang="less">
  @import '../../../src/common/stylus/mixins.less';

  .wrap{
    .newProduct{
      width: 100%;
      height: 100%;
      background-color: white;
      position: absolute;
      top: 829px;
      .newHeader{
        text-align: center;
        width: 100%;
        height: 220/@rem;
        background-color: #F1F7FD;
        padding-top: 40/@rem;

        .newText{
          font-size: 36/@rem;
          color: #9FB0C2;
        }
        .newBtn{
          background-color: #D8E5F0;
          border: none;
          outline: none;
          width: 240/@rem;
          height: 56/@rem;
          color: #8CA0B5;
        }

      }
      .newProductBanner{
        width: 100%;
        height: 420/@rem;
        /*background-color: #7e8c8d;*/
        font-size: 28/@rem;
        padding: 20/@rem 0 25/@rem 30/@rem;
        .newProductList {
          width: 2400/@rem;
          height: 100%;

          .firstItem{
            width: 288/@rem;
            height: 100%;
            float: left;
            .imgWrap {
              width: 250/@rem;
              height: 250/@rem;
              background-color: #F4F4F4;
              margin-bottom: 10/@rem;
            }
            img {
              width: 100%;
              height: 100%;
            }
            .new {
              display: block;
              width: 80/@rem;
              height: 40/@rem;
              background-color: #F28E2C;
              font-size: 12/@rem;
              text-align: center;
              line-height: 40/@rem;
              color: white;
              margin-left: 12/@rem;
              margin-bottom: 8/@rem;
            }
            .newTitle {
              margin-left: 12/@rem;
              margin-bottom: 8/@rem;
            }
            .newTitleColor {
              display: block;
              width: 95%;
              margin-left: 12/@rem;
              margin-bottom: 8/@rem;
              color: grey;
              font-size: 20/@rem;
            }
            .newPrice {
              color: #BA3A45;
              margin-left: 12/@rem;

            }

          }
        }
      }
    }

  }
</style>
