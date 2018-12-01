/*
使用mockjs提供mock数据接口
*/

import Mock from 'mockjs'

import data from './datahome.json'

//分别暴露接口

Mock.mock('/focusList',{
  code: 0,
  data:data.focusList
});

Mock.mock('/newItemNewUserList',{
  code:0,
  data:data.newItemNewUserList
})

Mock.mock('/topicList',{
  code:0,
  data:data.topicList
})

console.log('mockjs模拟数据运行了')
