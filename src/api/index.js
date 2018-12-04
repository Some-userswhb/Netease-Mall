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

//好物
export const reqGoodBrand = () => ajax('/cateList');
//第二屏
//左侧导航
export const reqLeftNav = () => ajax('/categoryL1List');

//第三屏 轮播图
export const reqThreeBanner = () =>  ajax('/threeBannerMsg');

//第三屏 小轮播图
export const reqSmallBanner = () => ajax('/column');

//第三屏 十点一刻
export const reqTenTimeMsg = () => ajax('/tenfifteen')

