/**
 * Created by 98194 on 2018/11/29.
 */

import ajax from './ajax'
//轮播图图片
export const reqBannerImgUrl = () => ajax('/focusList');

//新品首发信息
export const reqNewMsg = () => ajax('/newItemNewUserList');

//专题精选
export const reqTopicList = () => ajax('/topicList');
