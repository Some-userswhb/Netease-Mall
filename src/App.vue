<template>
  <div id="app">

    <router-view/>
    <WeFooter/>
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

<style>

</style>
