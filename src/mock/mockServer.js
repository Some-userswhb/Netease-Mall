/*
使用mockjs提供mock数据接口
*/

import Mock from 'mockjs'

import data from './data.json'

//分别暴露接口

Mock.mock('/bannerData',{code: 0, data:data.bannerData});

console.log('mockjs runing')
