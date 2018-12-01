<template>
    <div class="featuredWrap">
      <div class="featuredContent">
        <!--头部标题-->
        <div class="featTitle">
        <span>
          专题精选
          <i class="iconfont icon-chakangengduochanpin"></i>
        </span>
        </div>

        <!--图片信息-->
        <div class="imgWrap">

          <ul class="imgList">
            <li class="firstLi" v-for="(item,index) in PicList" :key="index">
              <img :src="item.itemPicUrl">
              <span class="shuMing">{{item.title}}</span>
              <span class="jiaGe">{{item.priceInfo}}元起</span>
              <p class="description">{{item.subtitle}}</p>
            </li>

          </ul>

        </div>

      </div>

    </div>
</template>


<script>
   import {reqTopicList} from '../../api/index'
   import BScroll from 'better-scroll'
   export default{
      data(){
        return{
           PicList:[]
        }
      },
      mounted(){

        reqTopicList()
          .then(res=>{
            if(res.code===0){
              this.PicList = res.data
              console.log(this.PicList[0].subtitle)

            }
          });

        new BScroll('.imgWrap',{
          scrollX: true,
          click: true
        })
      }
   }
</script>


<style lang="less">

  @import "../../../src/common/stylus/mixins.less";
  .featuredWrap{
    width: 100%;
    position: relative;
   .featuredContent{
     width: 100%;
     height: 522/@rem;
     background-color: #F4F4F4;
     position: absolute;
     left:0;
     top: 2160/@rem;
     border-bottom: 2/@rem solid #B3B3B3;

     .featTitle{
       width: 100%;
       height: 100/@rem;
       background-color: white;
       text-align: center;
       line-height: 100/@rem;
       font-size: 16px;
     }
     .imgWrap{
       position: relative;
       width: 100%;
       height: 385/@rem;
       padding: 10px 0 10px 10px;
       .imgList{
         width: 2200/@rem;
         height: 386/@rem;
         font-size: 26/@rem;
         li{
           float: left;
           margin-right: 20/@rem;
         }
         .firstLi{
           width: 575/@rem;
           .shuMing{
             float: left;
             margin-right: 50/@rem;
           }
           .jiaGe{
             float: right;
             color: #C35B64;
           }
           img{
             width: 575/@rem;
             height: 320/@rem;
             border-radius: 4px;
           }
           .description{
             float: left;
             margin-top: -6/@rem;
             color: #969696;
             font-size: 24/@rem;
           }
         }
       }

     }
   }
  }

</style>
