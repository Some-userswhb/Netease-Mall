<template>
    <div class="footer">
      <div class="footerlist">
        <ul class="footerul">
          <li :class="{lired:this.$route.path === '/home'}" @click="goto('/home')">
            <i class="iconfont icon-xiazai45"></i>
            <span >首页</span>
          </li>
          <li :class="{lired:this.$route.path === '/classification'}" @click="goto('/classification')">
            <i class="iconfont icon-fenlei" ></i>
            <span>分类</span>
          </li>
          <li :class="{lired:this.$route.path === '/knowledge'}" @click="goto('/knowledge')">
            <i class="iconfont icon-wupin"></i>
            <span >识物</span>
          </li>
          <li :class="{lired:this.$route.path === '/shoppingcart'}" @click="goto('/shoppingcart')">
            <i class="iconfont icon-shopshoppingco"></i>
            <span >购物车</span>
          </li>
          <li :class="{lired:this.$route.path === '/personal'}" @click="goto('/personal')">
            <i class="iconfont icon-gerenzhongxinhui"></i>
            <span >个人</span>
          </li>
        </ul>
      </div>
    </div>
</template>


<script>
   export default{
      data(){
        return{

        }
      },
      methods:{
        goto(path){
           this.$router.replace(path)

        }
      }
   }
</script>


<style lang="less">
  @import "../../common/stylus/mixins.less";
  .footer{
    position: relative;
  }
  .footerlist{

    position: fixed;
    bottom: 0px;
    left:0px;
    width: 100%;
    height: 96/@rem;
    /*background-color: gray;*/
    z-index: 30;
    background-color: white;
  }
  .footerlist span{
    text-decoration: none;
    font-size:24/@rem;


  }
  .footerul{
    width: 100%;
    height: 100%;
    list-style: none;

  }
  .footerul li{
    width: 20%;
    float: left;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4/@rem;
    &.lired{
      color: red;
    }
    .iconfont{
      font-size: 40/@rem;
      margin-bottom: 4/@rem;
      margin-top: 10/@rem;
    }
    .icon-fenlei{
      margin-top: 12/@rem;
      font-size: 36/@rem;
      margin-bottom: 10/@rem;

    }
  }



</style>
