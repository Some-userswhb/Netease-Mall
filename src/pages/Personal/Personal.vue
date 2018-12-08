<template>
    <div>
     <WeHeader/>
      <div class="login-content">
        <div class="login-logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
        </div>

        <div class="login-btn">
          <button class="login-phone" @click="goto('/loginphone')">
            账号登录
          </button>
          <br/>
          <button class="login-sms" @click="goto('/loginsms')">短信登录</button>
          <p class="login-phone-number">手机号快捷注册&nbsp;<i class="iconfont icon-jiantou1"></i></p>
        </div>

        <div class="login-footer">
          <ul class="login-footer-list">
            <li class="qq">
              QQ登陆
              <i class="iconfont icon-qq1"></i>
              <span>|</span>
            </li>
            <li class="weixin">
              微信登陆
              <i class="iconfont icon-weixin3"></i>

              <span>|</span>
            </li>
            <li class="weibo">
              微博登陆
              <i class="iconfont icon-weibo4"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import  WeHeader from '../../components/WeHeader/WeHeader.vue'
  export default{
     data(){
        return{
          goto(path){
             this.$router.push(path)
          }
        }
     },
    components:{
      WeHeader
    }
  }
</script>


<style lang="less">
  @import "../../../src/common/stylus/mixins.less";
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .login-content{
    width: 100%;
    height: 1250/@rem;
    background-color: #F4F4F4;
    padding-top: 200/@rem;
    .login-logo{
      width: 300/@rem;
      height: 100/@rem;
      margin: 0 auto;
      margin-bottom: 100/@rem;
      margin-top: 50px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .login-btn{
      padding-top: 40/@rem;
      width: 100%;
      height: 540/@rem;
      text-align: center;
      font-size: 32/@rem;
      .login-phone{
        width: 700/@rem;
        height: 100/@rem;
        border: none;
        margin-bottom: 36/@rem;
        background-color: #b4282d;
        color: white;
        font-size: 32/@rem;
        margin-left: 10/@rem;
        border-radius: 4px;
      }
      .login-sms{
        width: 700/@rem;
        height: 100/@rem;
        border: 2/@rem solid #b4282d;
        margin-bottom: 36/@rem;
        color: #b4282d;
        font-size: 32/@rem;
        background-color: #F4F4F4;
        border-radius: 4px;

      }
    }
    .login-footer{
      width: 100%;
      height: 80/@rem;
      /*background-color: gold;*/
      padding-top: 40px;
      .login-footer-list{
        width: 100%;
        height: 60/@rem;
        line-height: 50/@rem;
        font-size: 24/@rem;
        color: gray;
        li{
          .icon-qq1{
            margin-right: 40/@rem;
          }
          .icon-weixin3{
            margin-right: 40/@rem;
          }
          float: left;
          margin-left: 65/@rem;
          span{
            display: inline-block;
            font-size: 28/@rem;
          }
        }
      }
    }
  }
</style>
