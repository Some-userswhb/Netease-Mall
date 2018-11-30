/**
 * Created by 98194 on 2018/11/27.
 */

import Vue from 'vue'

import VueRouter from 'vue-router'
import Classification from '../pages/Classification/Classification.vue'
import Home from '../pages/Home/Home.vue'
import Knowledge from '../pages/Knowledge/Knowledge.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shoppingcart from '../pages/Shoppingcart/Shoppingcart.vue'
//声明使用
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/classification',
      component:Classification
    },
    {
      path:'/knowledge',
      component:Knowledge
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/shoppingcart',
      component:Shoppingcart
    },
    {
      path:'',
      redirect:'/home'
    },
  ]


})

