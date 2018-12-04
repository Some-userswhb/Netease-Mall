<template>
    <div class="login-mask" @click="goto('/home')">
      <div class="mask-kong"></div>
     <div class="mask-header">
       <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="">
     </div>
      <div class="mask-content">
        <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="">
      </div>

      <div class="mask-footer">
        <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="">
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
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #eee;
  }
  .login-mask{
    width: 100%;
    /*height: 1233/@rem;*/
    height: 100%;
    background-color: #eee;
    .mask-kong{
      width: 100%;
      height: 100/@rem ;
    }
    .mask-header{
      width: 100%;
      height: 430/@rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .mask-content{
      width: 100%;
      height: 400/@rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .mask-footer{
      width: 100%;
      height: 450/@rem ;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
