<template>
 <div class="yanLook">
   <h5>严选LOOK</h5>
   <div class="look-img">
     <img src="https://yanxuan.nosdn.127.net/426ea284025bb222b1a3fdb11a6adb3f.jpg" alt="">
   </div>
  <div class="user-comment">
    <div class="users-avatar">
      <img src="https://yanxuan.nosdn.127.net/069037fe8c52e14c152d85074071fe43.jpg" alt="">
    </div>
    <span style="">a* * * *0</span>
    <p>是我想要的风格.安装时除了有个螺丝孔的问题，后因有设备处理就很方便的解决问题了。大家看到都觉得很会买的东西，夕阳严选多提供这列有品位的产品。</p>
  </div>
 </div>



</template>


<script>
   export default{}
</script>


<style lang="less">
  @import "../../../common/stylus/mixins.less";
  .yanLook{
      width: 100%;
      height: 1124/@rem;
      background-color: white;
      h5{
        text-align: center;
        font-size: 30/@rem;
        margin-bottom: 30/@rem;
        padding-top: 40/@rem;
      }
      .look-img{
        width: 100%;
        height: 750/@rem;
        img{
          width: 100%;
          height: 100%;
        }
    }
    .user-comment{
      width: 720/@rem;
      height: 242/@rem;
      /*background-color: #7e8c8d;*/
      padding-left: 20/@rem;
      padding-top: 20/@rem;
      p{
        float: left;
        font-size: 14px;
        color: #7f7f7f;
      }
      span{
        display:block;
        font-size: 16px;
        margin-bottom: 15px;
        float: left;


      }
      .users-avatar{
        float: left;
        width: 50/@rem;
        height: 50/@rem;
        display: inline-block;
        margin-right: 10px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;

        }

      }
    }
  }

</style>
