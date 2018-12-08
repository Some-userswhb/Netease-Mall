<template>
    <div class="searchWrap">
      <div class="searchHeader">
        <div class="backBtn" @click="$router.back()">
          <i class="iconfont icon-gengduo2"></i>
        </div>
        <div class="searchInp">
          <input type="text" placeholder="降温必备温暖围巾 低至55折" v-model="userInput">
          <button class="cancelBtn" @click="canceUserInput">清空</button>
        </div>
      </div>


      <div class="goodsList" v-show="isShow">
        <ul class="goodsUl">
          <li v-for="(item,index) in filterPersons" :key="index">
            {{item.name}}

          </li>
        </ul>
      </div>


    </div>
</template>


<script>
   export default{
      data(){
         return{
           persons:[
             {name:'按摩椅',id:1},
             {name:'按摩',id:2},
             {name:'成人用品',id:3},
             {name:'情趣用品',id:4},
             {name:'电脑配件',id:5},
             {name:'印象食堂',id:6},
             {name:'男士裤子',id:7},
             {name:'女士内衣',id:8},
             {name:'鞋包配饰',id:9},
             {name:'美容美发',id:10},
             {name:'护肤专柜',id:11},
             {name:'膜法世家',id:12},
             {name:'瑞倪维儿',id:13},
             {name:'天天快递',id:14},
             {name:'淘宝金币',id:15},
             {name:'京东快递',id:16},
             {name:'圆通快递',id:17},
             {name:'申通快递',id:18},
             {name:'男士内衣',id:19},
             {name:'保暖围巾',id:20},
             {name:'成人用品',id:21},
             {name:'保健强身',id:22},
             {name:'锻炼器材',id:23},
             {name:'运动有氧',id:24},
             {name:'水果蔬菜',id:26},
             {name:'生擒肉类',id:27},
             {name:'蓬松食品',id:28},
             {name:'情侣服饰',id:29},
             {name:'被子',id:30},
             {name:'杯子水杯',id:31},
             {name:'宝宝',id:32},
             {name:'抱枕',id:33},
             {name:'暖宝宝',id:34},
             {name:'纯棉床垫',id:35},
             {name:'床上四件套',id:36},
             {name:'厨房用具',id:37},
             {name:'抽纸',id:38},
             {name:'长裤',id:39},
             {name:'电器',id:40},
             {name:'短袖',id:41},
             {name:'电动牙刷',id:42},
             {name:'豆豆鞋',id:43},
             {name:'耳机耳麦',id:44},
             {name:'儿童背心',id:45},
             {name:'儿童球衣',id:46},
             {name:'公仔玩具',id:47},
             {name:'高领毛衣',id:48},
             {name:'iPad充电器',id:49},
             {name:'手机充电器',id:50},
             {name:'iPhone手机壳',id:51},
             {name:'蓝牙耳机',id:52},
             {name:'安全设备',id:52},
             {name:'andirons',id:52},
             {name:'安检设备',id:52},
             {name:'蓝牙耳机',id:52},
           ],
           userInput:'',  //初始化用户信息
           isShow:false
         }
      },
     methods:{
       canceUserInput(){
          this.userInput = ''
       }
     },
     computed:{
       filterPersons(){
         const {persons,userInput} = this;
         const arr = persons.filter((good,index) => {
            if(userInput !== ''){
              this.isShow = true;
              return good.name.indexOf(userInput) !== -1;
            }
         });
         return arr
       }
     }

   }
</script>


<style lang="less">
  @import "../../../common/stylus/mixins.less";
  .searchWrap{
    width: 100%;
    height: 667px;

    .searchHeader{
      width: 100%;
      height: 50px;
      background-color: firebrick;
      .backBtn{
        width: 50px;
        height: 50px;
        float: left;
        .icon-gengduo2{
          display: inline-block;
          transform: rotate(180deg);
          margin-left: 20/@rem;
          font-size: 45/@rem;
          margin-top: 30/@rem;
          color: wheat;

        }
      }
      .searchInp{
        float: left;
        margin-top: 15/@rem;
        input{
          width: 500/@rem;
          font-size: 28/@rem;
          height: 60/@rem;
          padding-left: 40/@rem;
          border-radius: 20/@rem;
          outline: none;
        }
        .cancelBtn{
          border: none;
          height: 50/@rem;
          background-color: #f4f4f4;
          border-radius: 10/@rem;
        }
      }
    }

    .goodsList{
      width: 100%;
      height: 617px;
      background-color: #F4F4F4;
      .goodsUl{
        padding-left: 20/@rem;
        padding-right: 20/@rem;
        width: 720/@rem;
        background-color: white;
        li{
          padding-left: 20/@rem;
          font-size: 28/@rem;
          height: 80/@rem;
          line-height: 80/@rem;
          border-bottom: 2/@rem solid #eee;
          color: #7B7B7B;
        }
        li:last-child{
          border: none;
        }
      }

    }



  }


</style>
