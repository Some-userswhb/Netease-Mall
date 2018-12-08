<template>

<div class="brandItem">

  <div class="headerTitle">
    <span class="Brand">品牌制造商直供</span>
    <span class="More">
      更多
     <i class="iconfont icon-jiantou1"></i>
    </span>
  </div>
  <div class="brandItemPicMsg">
    <ul class="picMsgList">
      <li class="onePic">
        <span>海外制造商</span><br/>
        <span class="price">9.9元起</span>
      </li>
      <li class="twoPic">
        <span>CK制造商</span><br/>
        <span class="price">25元起</span>
      </li>
      <li class="threePic">
        <span>新秀丽制造商</span><br/>
        <span class="price">34.9元起</span>
      </li>
      <li class="fourPic">
        <span>MUJI制造商</span><br/>
        <span class="price">35元起</span>
      </li>

    </ul>
  </div>
</div>


</template>

<script>
   export default{

   }
</script>


<style lang="less">

  @import "../../../src/common/stylus/mixins.less";
  .brandItem{
    width: 100%;
    height: 670/@rem;
    background-color: white;
    position: absolute;
    top: 1000/@rem;
    /*头部*/
    .headerTitle{
      width: 100%;
      height: 80/@rem;
      /*background-color: red;*/
      line-height: 80/@rem;
      .Brand{
        float: left;
        margin-left: 20/@rem;
        font-size: 34/@rem;
      }
      .More{
        float: right;
        font-size: 28/@rem;
        margin-right: 20/@rem;
        i{
          font-size: 24/@rem;
        }
      }
    }
    /*图片信息*/
    .brandItemPicMsg{
      margin: 0 auto;
      width: 94%;
      height: 580/@rem;
      background-color: white;
      .picMsgList{
        width: 100%;
        height: 520/@rem;
        font-size: 30/@rem;
        text-align: center;
        li{
          padding-top: 20/@rem;
          .price{
            font-size: 26/@rem;
            color: grey;
          }
        }
        .onePic{
          float: left;
          width: 50%-1;
          height: 50%-1;
          background-image: url("https://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1");
          background-size: 100% 100%;
          margin-right: 7/@rem;

        }
        .twoPic{
          float: left;
          width: 49%;
          height: 49%;
          background-image: url("https://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png?imageView&thumbnail=343y260&enlarge=1");
          background-size: 100% 100%;
          margin-top: -2/@rem;
        }
        .threePic{
          position: absolute;
          left: 12/@rem;
          top:355/@rem;
          width: 49%-1.5;
          height: 49%-10.5;
          background-image: url("https://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1");
          background-size: 100% 100%;
          margin-right: 6/@rem;
          margin-top: 4/@rem;
        }
        .fourPic{
          position: absolute;
          left: 368/@rem;
          top:355/@rem;
          margin-left: 6/@rem;
          width: 49%-3;
          height: 49%-10.5;
          background-image: url("https://yanxuan.nosdn.127.net/053ecfefd033a9acd2cb95483e14fcb6.jpg?imageView&thumbnail=343y260&enlarge=1");
          background-size: 100% 100%;
          margin-top: 6/@rem;

        }
      }

    }
  }


</style>
