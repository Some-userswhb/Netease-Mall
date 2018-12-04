
/*
  入口js
*/
//引入必备的vue文件 创建vue实例
import Vue from 'vue';
//引入主组件App
import App from './App.vue';
//引入路由组件
import router from './router';
//引入Vuex管理对象
import store from './store'
//引入轮播官方样式
import 'swiper/dist/css/swiper.css';
//引入mock接口模块
import './mock/mockServer'



import VueLazyLoad from 'vue-lazyload'
import loading from './common/images/loading.gif'

//懒加载
Vue.use(VueLazyLoad,{
  loading
});


new Vue({

   el:'#app',
   components:{
     App
   },
   template:'<App/>',
   router,
   store

})

