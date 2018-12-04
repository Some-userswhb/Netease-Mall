/**
 * Created by 98194 on 2018/11/30.
 */

/**
 *    直接更新状态数据对象
 */

import {
  RECEIVE_LEFTNAVLIST,
  RECEIVE_THREEBANNERMSG,
  RECEIVE_SMALLBANNER,
  RECEIVE_SHIWUTENTIME
} from './moutation-types'

export default {

  [RECEIVE_LEFTNAVLIST] (state,{leftnavlist}){
    state.leftnavlist = leftnavlist
  },
  [RECEIVE_THREEBANNERMSG] (state,{BannerMsg}){
    state.BannerMsg = BannerMsg
  },
  [RECEIVE_SMALLBANNER] (state,{smallBanner}){
    state.smallBanner = smallBanner
  },
  [RECEIVE_SHIWUTENTIME] (state,{shiwuTenTime}){
    state.shiwuTenTime = shiwuTenTime
  },

}
