<template>
	
  <div class='top_slide'>
  	  <div class="swiper-container">
     <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='item in items'>
        	 <img v-bind:src="item.img">
        </div>
        <!-- <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div> -->
     </div>
     <div class="swiper-pagination">
     	 <span v-for='item in items'><img v-bind:src="item.img"></span>

     </div>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
     </div>

  </div>


</template>


<script>
  var swiper= require('../assets/swiper.min.js');

	 module.exports={
	 	  data:function(){
	 	  	  return {
                  items:[
                    {img:'../../imgs/cook.png'},
                    {img:'../../imgs/guess.png'},
                    {img:'../../imgs/life.png'},
                    {img:'../../imgs/music.png'},
                    {img:'../../imgs/rent.jpg'},
                  ]
	 	  	  }
	 	  },
         mounted:function(){
             var mySwiper = new Swiper('.swiper-container',{
             	pagination : '.swiper-pagination',
             	paginationClickable :true,
             	paginationType : 'custom',
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
					
             })
         },


	 }


</script>

<style scoped>
	@import url('../css/swiper.min.css');
    .top_slide{
    	 width: 100%;
    	 height: 0;
    	 padding-bottom: 46.7%;
    	 position: relative;
    	 overflow: hidden;

    }
    .swiper-container{
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .swiper-slide img{
    	 width: 100%;
    	 height: 100%;
    }
    .top_slide .swiper-button-white.swiper-button-prev{
    	 position: absolute;
    	 
    	 display: flex;
    	 align-items: center;
    	 top: 50%;
    	 left: 2.1%;
    }
    .top_slide .swiper-button-white.swiper-button-next{
    	   top: 50%;
    	 right: 2.1%;
    }
     .swiper-pagination {
     	display: flex;
     	justify-content: center;
     }
     .swiper-pagination span{
     	 display: flex;
     	 width: 50px;
     	 height: 50px;
     	 margin-left: 20px;
     	 margin-right: 20px;

     }
     .swiper-pagination span img{
     	 width: 100%;
     	 height: 100%;
     }

</style>