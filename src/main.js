
/*
  入口js
*/
//引入必备的vue文件 创建vue实例
import Vue from 'vue';
//引入主组件App
import App from './App.vue';
//引入路由组件
import router from './router';

import 'swiper/dist/css/swiper.css';

new Vue({
   el:'#app',
   components:{
     App
   },
   template:'<App/>',
   router
})

