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
import LoginMask from '../pages/LoginMask/LoginMask.vue'
import LoginPhone from '../pages/LoginPhone/LoginPhone.vue'
import LoginSms from '../pages/LoginSms/LoginSms.vue'
//声明使用
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/classification',
      component:Classification,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/knowledge',
      component:Knowledge,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/shoppingcart',
      component:Shoppingcart,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/loginmask',
      component:LoginMask

    },
    {
      path:'/loginphone',
      component:LoginPhone

    },
    {
      path:'/loginsms',
      component:LoginSms

    },
    {
      path:'/',
      redirect:'/loginmask'
    },
  ]


})

