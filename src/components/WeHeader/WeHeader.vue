<template>
    <div class="header-wrap">
      <div class="com-header">
        <ul class="header-list">
          <li class="list-one" @click="goto('/home')">
            <i class="iconfont icon-01"></i>
          </li>
          <li class="list-two">
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="">
          </li>
          <li class="list-three" @click="goto('/home')">
            <i class="iconfont icon-sousuo1"></i>

          </li>
          <li class="list-gouwuche" @click="goto('/shoppingcart')">
            <i class="iconfont icon-gouwuche" style="font-size:35px;"></i>
          </li>
        </ul>
      </div>
    </div>
</template>


<script>
   export default{
      data(){
         return{
            goto(path){
               this.$router.replace(path)
            }
         }
      }
   }
</script>


<style lang="less">
  @import "../../../src/common/stylus/mixins.less";
  .header-wrap{
    position: relative;
    .com-header{
    width: 100%;
    height: 50/@rem;
    background-color: white;
    padding: 20/@rem 0;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 20;
    .header-list{
      width: 100%;
      height: 60/@rem ;
      li{
        width: 180/@rem ;
        height: 55/@rem ;
        line-height: 55/@rem ;
        float: left;
        .iconfont{
          font-size: 60/@rem ;
        }
      }
      .list-one{
        margin-left: 20/@rem ;
      }
      .list-two{
        margin-left: 70/@rem ;
        margin-right: 110/@rem ;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .list-three{
        width: 80/@rem ;
        margin-right: 20/@rem ;
        .icon-sousuo1{
          margin-right: 16/@rem ;
          font-size:70/@rem ;
        }
      }
      .list-gouwuche{
        width: 80/@rem ;
        height: 80/@rem ;
        line-height: 46/@rem ;
      }
    }
  }
  }

</style>
