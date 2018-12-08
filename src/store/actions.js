/**
 * Created by 98194 on 2018/11/30.
 */


/**
 *  异步获取 ajax请求回来的数据
 */
import {
  reqLeftNav,
  reqThreeBanner,
  reqSmallBanner,
  reqTenTimeMsg
} from '../api'


import {
  RECEIVE_LEFTNAVLIST,
  RECEIVE_THREEBANNERMSG,
  RECEIVE_SMALLBANNER,
  RECEIVE_SHIWUTENTIME
} from './moutation-types'
export default {

   //异步获取第二屏左侧导航列表的信息
  async getleftNavList ({commit}) {

    const result = await reqLeftNav();
     if(result.code ===0){
      console.log(result)
      commit(RECEIVE_LEFTNAVLIST,{leftnavlist:result.navlist})
     }
  },

  //异步获取第三屏轮播图信息
  async getThreeBanner({commit}){
    const result = await reqThreeBanner();
    if(result.code === 0){
      console.log(result);
      commit(RECEIVE_THREEBANNERMSG,{BannerMsg:result.threeshiwu})
    }
  },

  //异步获取小轮播 数据
  async getSmallBanner({commit}){
    const result = await reqSmallBanner();
    if(result.code === 0){
      console.log(result);
      commit(RECEIVE_SMALLBANNER,{smallBanner:result.smallbanner})
    }
  },
  //异步获取十点一刻 数据
  async getTenTimeMsg({commit}){
    const result = await reqTenTimeMsg();
    if(result.code === 0){
      console.log(result);
      commit(RECEIVE_SHIWUTENTIME,{shiwuTenTime:result.tentimemassage})
    }
  },

}

