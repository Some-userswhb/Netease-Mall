<template>
    <div class="phone-header">
      <div class="phone-return" @click="goto('/Personal')">
        <i class="iconfont icon-jiantou3"></i>
      </div>
      <div class="header-img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="content-input">
        <p>账号登陆</p>
        <input type="text" placeholder="手机/邮箱/用户名">
        <input type="password" placeholder="密码">
        <input type="text" placeholder="验证码">
        <input type="button" value="登录" class="content-button">
        <p style="color: #999; font-size: 16px">关于我们</p>

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
  .phone-header{
    width: 100%;
    height: 600/@rem;
    text-align: center;
    padding-top: 160/@rem;
    position: relative;
    .phone-return{
      width: 100/@rem;
      height: 100/@rem;
      position: absolute;
      left: 10/@rem;
      top: 30/@rem;
      .iconfont{
        font-size: 60/@rem;
      }
    }
    .header-img{
      width: 100%;
      height: 100/@rem;
      text-align: center;
      margin-bottom: 60/@rem;
      img{
        width: 300/@rem;
        height: 100%;
      }
    }
    .content-input{
      width: 100%;
      height: 600/@rem;
      p{
        color: #b4282d;
        font-size: 32/@rem;
        font-weight: bold;
        margin-bottom: 20/@rem;
      }
      input{
        border: 2/@rem solid #999;
        font-size: 28/@rem;
        width: 600/@rem;
        height: 100/@rem;
        margin-bottom: 40/@rem;
        padding-left: 20/@rem;
        border-radius: 12/@rem;
        outline: none;
      }
      .content-button{
        background: #b4282d;
        color: white;
        font-size: 32/@rem;
        width: 620/@rem;
      }
    }

  }


</style>
