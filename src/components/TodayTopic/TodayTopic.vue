<template>

      <div class="today-topic">

          <h5>十点一刻</h5>


        <div class="swiper-container" id="today">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in shiwuTenTime" :key="index">
              <div class="textcenter">
                <p>-- 今日话题 --</p>
                <p>{{item.title}}</p>
                <p>{{item.desc}}</p>
                <p>{{item.participantNum}}人参与话题</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="textcenter">
                <p style="font-size: 20px; margin-top: 80px">查看全部话题</p>
              </div>
            </div>


          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>

        </div>



      </div>

</template>


<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
   export default{
     computed:{
       ...mapState(['shiwuTenTime'])
     },

     mounted(){
       this.$store.dispatch('getTenTimeMsg')

        setTimeout(() => {
          new Swiper('#today',{
            slidesPerView: 1.1,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        },800)



     }


   }
</script>


<style lang="less">
  @import "../../common/stylus/mixins.less";
.today-topic{
  width: 100%;
  background-color: white;
  h5{
    text-align: center;
    font-size: 16px;
    margin: 10px 0 20px 0;
    background-color: white;
    padding-top: 15px;

  }
  .swiper-container{
      width: 750/@rem !important;
      height: 420/@rem;
      margin-bottom: 40/@rem;
    background-color: white;
    .swiper-slide {
      text-align: center;
      font-size: 36/@rem;
      background: #fff;
      width: 642/@rem !important;
      height: 402/@rem;
      margin-left: 20/@rem;
     .textcenter{
       width:642/@rem !important;
       height: 100%;
       background: url("../../common/images/today-bg.png");
       background-size: 100% 100%;
       p:nth-child(1){
         margin-top: 20/@rem;
         font-size: 24/@rem;
         color: gray;
       }
       p:nth-child(2){
         margin-top: 40/@rem;
         font-size: 38/@rem;
         color: black;
         font-weight: bold;
       }
       p:nth-child(3){
         margin-top: 20/@rem;
         font-size: 30/@rem;
         color: black;
       }
       p:nth-child(4){
         margin-top: 20/@rem;
         font-size: 20/@rem;
         color: black;
       }
     }


      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }


}
</style>
