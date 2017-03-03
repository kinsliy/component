<template>
	<div id='check_img'>
		 <img class='check_img_bg' v-bind:src="item.img">
		 <img class='check_img_open' v-bind:src="item.open">
      
         <div class='check_img_content'>
         	  <div>
         	  	  <div>467项检测</div>
         	  	  <div>由平台提供专业的查房服务,保证租客在租住前对房屋设施进行全面了解</div>
         	  	  <span>了解更多</span>
         	  </div>
         </div>

	</div>
</template>


<script>
	module.exports={
		  data:function(){
		  	  return {
                  item:{
                   img:'../../imgs/music.png ',
                   open:'../../imgs/grey_open.png',
                  },
		  	  }
		  },
	}


</script>


<style scoped>
	 #check_img{
	 	 width: 100%;
	 	 height: 0;
	 	 padding-bottom: 32.5%;
	 	 position: relative;
	 }
     
     .check_img_bg{
     	 position: absolute;
     	 width: 100%;
     	 height: 100%;
     }
   
     .check_img_open{
     	 position: absolute;
     	 top: 10px;
     	 right: 2.1%;
     }
   
     .check_img_content{
     	  position: absolute;
     	  width: 100%;
     	  height: 100%;
     	  display: flex;
     	  justify-content: center;
     	  align-items: center;
     	  background-color: rgba(0,0,0,0.2);
     }
    .check_img_content >div{
    	 width: 512px;
    	 height: 146px;
    	 display: flex;
    	 flex-direction: column;
    	 justify-content: space-between;
    	 align-items: center;
    	 color: white;
    	 font-size: 16px;
    }
    .check_img_content >div>div:nth-child(1){
    	 font-size: 32px;
    	 font-weight: bold;
    }
    .check_img_content >div>span{
    	  margin-top: 50px;
    	  border-radius: 30px;
    	  width: 110px;
    	  height: 33px;
    	  padding: 15px 0px;
    	  border: 3px solid white;
    	  display: flex;
    	  justify-content: center;
    	  align-items: center;
    	  color: white;
    	  font-size: 18px;
    }
</style>