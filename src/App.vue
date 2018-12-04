<template>
  <div id="app">
    <transition name="fade" mode="in-out">
      <router-view/>
</transition>

    <WeFooter v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
  import WeFooter from './components/WeFooter/WeFooter.vue'
  export default{
    components:{
      WeFooter
    }
  }


</script>

<style lang="less">
  @import "./common/stylus/mixins.less";
  .fade-enter {
    opacity:0.2;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity 0.3s;
  }
  .fade-leave-active {
    opacity: 0.2;
    transition: opacity 0.3s;

  }
</style>
