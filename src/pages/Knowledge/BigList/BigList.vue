<template>
  <div class="big-textContent" style="margin-bottom: 20px">
    <h5>严选臻品</h5>
    <div class="big-whiteboy">
      <img src="https://yanxuan.nosdn.127.net/39c9199f7d40425b3dcd9e6737955816.jpg" alt="">
      <span class="floleft">入夏床品必备新宠</span>
      <span class="figright">69元起</span>
      <p class="manjian">床品换机新品大盘点</p>
    </div>

    <div class="Big-cup">
      <div class="left-text">
        <p>情欲的清新表达方式</p>
        <p>这款按摩器没到拿下设计大奖</p>
      </div>
      <div class="right-img">
        <img src="https://yanxuan.nosdn.127.net/2b7e7790a87c1427cc0fe92e65bcc87a.jpg" alt="">
        <span>口碑商品</span>
      </div>
    </div>
    <div class="Big-cup">
      <div class="left-text">
        <p>上班族必囤速食清单</p>
        <p>有他们就拥有24小时营业的...</p>
      </div>
      <div class="right-img">
        <img src="https://yanxuan.nosdn.127.net/bc1bc588c299dde9e398cd548dab480e.jpg" alt="">
        <span>严选推荐</span>
      </div>


    </div>


  </div>

</template>


<script>

   export default{

   }
</script>


<style lang="less">
  @import "../../../common/stylus/mixins.less";

  .big-textContent{
    width: 750/@rem;
    background-color: white;
    padding-left: 13px;
    h5{
      text-align: center;
      font-size: 30/@rem;
      margin-bottom: 30/@rem;
      padding-top: 40/@rem;
    }
    .big-whiteboy{
      width:690/@rem;
      height: 569/@rem;
      border-radius: 3px;
      border: 1px solid #d9d9d9;
      background-color: #FFFFFF;
      margin-bottom: 20px;
      img{
        width: 100%;
        height: 200px;
      }
      .floleft{
        font-size: 18px;
        float: left;
        margin-left: 10px;
        margin-bottom: 10px;
      }
      .figright{
        font-size: 16px;
        float: right;
        margin-right: 10px;
      }
      .manjian{
        font-size: 14px;
        margin-left: 10px;
        float: left;
        color: #7f7f7f;
      }

    }
    .Big-cup{
      width:690/@rem;
      height: 274/@rem;
      /*background-color: gold;*/
      border: 2/@rem solid #d9d9d9;
      font-size: 14px;
      margin-bottom: 16px;
      .left-text{
        float: left;
        width: 408/@rem;
        height: 274/@rem;

        p:nth-child(1){
          font-size: 16px;
          margin-top: 45px;
          margin-left: 10px;
        }
        p:nth-child(2){
          font-size: 14px;
          color: #7e8c8d;
          margin-top: 2px;
          margin-left: 10px;
        }

      }
      .right-img{
        float: left;
        width: 282/@rem;
        height: 100%;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        span{
          position: absolute;
          left: 5px;
          top: 10px;
          background-color: whitesmoke;
          border-radius: 6px;
          font-size: 12px;
          padding: 0 8px;
        }
      }

    }


  }

</style>
