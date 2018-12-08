<template>
    <div class="loginYes">
      <h5 @click="goto('/personal')">退出登录</h5>
      <img src="../../../common/images/binbin.jpg" alt="">
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
  @import '../../../common/stylus/mixins.less';
  .loginYes{
    width: 100%;
    height: 600px;
    background-color: gold;
    img{
      width: 100%;
      height: 90%;
    }
  }

</style>
