/*
使用mockjs提供mock数据接口
*/

import Mock from 'mockjs'

import data from './datahome.json'
import navlist from './datanav.json'
import threeshiwu from './datashiwu.json'
import smallbanner from './datashiwu.json'
import tentimemassage from './datashiwu.json'


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
Mock.mock('/cateList',{
  code:0,
  data:data.cateList
})

Mock.mock('/categoryL1List',{
  code:0,
  navlist:navlist.categoryL1List
})

//识物大轮播
Mock.mock('/threeBannerMsg',{
  code:0,
  threeshiwu:threeshiwu.threeBannerMsg
})
//小轮播图
Mock.mock('/column',{
  code:0,
  smallbanner:smallbanner.column
})
//十点一刻
Mock.mock('/tenfifteen',{
  code:0,
  tentimemassage:tentimemassage.tenfifteen
})
//严选

console.log('mockjs模拟数据运行了')
