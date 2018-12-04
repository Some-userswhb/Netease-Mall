<template>
  <div class="sms-header">
    <div class="sms-return" @click="goto('/Personal')">
      <i class="iconfont icon-jiantou3"></i>
    </div>
    <div class="header-img">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="content-input">
      <p>短信登陆</p>
      <input type="text" placeholder="手机号">
      <input type="text" placeholder="验证码">
      <div class="sms-alert">温馨提示: 未注册网易严选账号的手机号,登录时将自动注册，且代表已同意<span>“用户服务协议”</span> </div>
      <input type="button" value="登录" class="content-button">
      <p style="color: #999; font-size: 14px">关于我们</p>

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
  .sms-header{
    width: 100%;
    height: 600/@rem;
    text-align: center;
    padding-top: 160/@rem;
    position: relative;

    .sms-return{
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
        height: 90/@rem;
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
      .sms-alert{
        width: 600/@rem;
        margin-left: 60/@rem;
        font-size: 24/@rem;
        color: #999;
        margin-bottom: 20/@rem;
      }
    }

  }


</style>
