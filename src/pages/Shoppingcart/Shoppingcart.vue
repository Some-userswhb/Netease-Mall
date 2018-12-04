<template>
    <div class="shopping-cart">
      <div class="cart-header">
        <h3>购物车</h3>
      </div>
      <!--text公告-->
      <div class="cart-content">
        <ul  class="cart-list">
          <li class="cart-item">30天无忧退货</li>
          <li>48小时极速退款</li>
          <li>满88元免邮费</li>
        </ul>
        <div>
      </div>


        <!--购物车背景图-->
        <div class="cart-bg clearFix">
          <div class="cart-bgimg"></div>
          <p>去添点什么吧</p>
        </div>
        <div class="cart-login">
          <button class="cart-button" @click="goto('/personal')">登录</button>
        </div>
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
  @import "../../common/stylus/mixins.less";
  .shopping-cart{
    position: relative;
    width: 100%;
    height: 100%;

    .cart-header{
      width: 100%;
      height:100/@rem;
      line-height: 100/@rem;
      background-color: #b4282d;
      text-align: center;

    }
    .cart-content{
      background-color: #f4f4f4;
      width: 100%;
      height: 1130/@rem;
      .cart-list{
        width: 100%;
        height: 40/@rem;
        font-size: 24/@rem;
        padding-top: 20/@rem;
        li{
          float: left;
          margin-left: 90/@rem;
        }
      }
    }
    .cart-bg{
      position: absolute;
      left:0;
      top: 450/@rem;
      width: 100%;
      height: 332/@rem;
      padding-top: 32/@rem;
      text-align: center;
      .cart-bgimg{
        width: 266/@rem;
        height:266/@rem;
        margin: 0 auto;
        background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png");
        background-size: 100% 100%;
      }
      p{
        font-size: 16px;
        color: #999;
      }
    }
    .cart-login{
      width: 100%;
      height: 200/@rem;
      position: absolute;
      left: 0;
      top: 820/@rem;
      text-align: center;
      .cart-button{
        border:none;
        outline: none;
        width: 500/@rem;
        height: 80/@rem;
        background-color: #b4282d;
        font-size: 20px;
        color: white;
        border-radius: 8/@rem;
      }

    }
  }

</style>
