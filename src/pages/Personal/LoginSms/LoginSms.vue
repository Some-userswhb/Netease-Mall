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
      <div class="Verification-code">

        <input type="text" placeholder="手机号" v-model="phone">



        <button :class="{'then':isshow}" @click="vericode"
                class="getcode" :disabled="isDisabled">获取验证码 </button>



        <span :class="{'then':isshow}" class="Countdown" v-show="ishide">({{time}}s)</span>
      </div>

      <input type="text" placeholder="验证码" v-model="code">
      <div class="sms-alert">温馨提示: 未注册网易严选账号的手机号,登录时将自动注册，且代表已同意<span>“用户服务协议”</span> </div>
      <input type="button" value="登录" class="content-button" @click="login('/logincompleted')">
      <p style="color: #999; font-size: 14px">关于我们</p>

    </div>
  </div>
</template>


<script>
  import {Toast} from 'mint-ui';
  export default{
    data(){
      return{
        goto(path){
          this.$router.replace(path)
        },
        isshow:false,
        time:30,
        ishide:false,
        phone:'',
        code:'',
        isDisabled:false

      }
      },
    methods:{
      //点击验证码倒计时
      vericode(){
        this.isshow = !this.isshow;
        this.ishide = true
        let daojishi;
        //开启定时器
        daojishi = setInterval( () => {

          this.time--
          this.isDisabled = true
          if(this.time === 0){
            clearInterval(daojishi)
            this.isDisabled = false
            this.ishide = false
          }
        },1000)
        this.time = 30
      },

      //手机 短信验证登录
      login(path){

        if(this.phone === '' && this.code === ''){
          Toast('手机号不能为空~');
        }else if(!/^1[34578]\d{9}$/.test(this.phone)){
          Toast('手机号格式错误,请重新输入');
          this.phone = ''
          this.code = ''
        }else if(!/^\d{6}$/.test(this.code)){
          Toast('验证码输入不正确,请重新输入');
          this.code = ''
        }else{
          Toast('登录成功');
          this.$router.replace(path);
        }
        }


    },



  }
</script>


<style lang="less">
  @import "../../../common/stylus/mixins.less";
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
      .Verification-code{
        width: 100%;
        height: 60px;
        position: relative;
        .getcode{
          position: absolute;
          right: 18%;
          top:25%;
          font-size: 28/@rem;
          color: black;
          border-radius: 6/@rem;
          border: none;
        }
        .Countdown{
          position: absolute;
          right: 9%;
          top:25%;
          font-size: 28/@rem;
          color: black;
        }
        .then{
          color: #7e8c8d;
          font-weight: 500;
        }
      }
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
