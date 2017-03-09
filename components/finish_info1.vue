<template>
	<div class='finish_info'>
		 <div>
		 	<span>
		 		 <img v-bind:src="item.img1">
		 	</span>
		 	<span>...............................................................</span>
		 	<span>
		 		 <img v-bind:src="item.img2">
		 	</span>
		 </div>


        <div>
        	<span>完善房源信息</span>
        	<span>完善房间信息</span>
        </div>


	</div>
</template>

<script>
	export default{
		  data(){
		  	  return{
                 item:{
                 	 img1:'../../imgs/number1_grey.png',
                 	 img2:'../../imgs/number2_black.png',
                 }
                   

		  	  }
		  },
	}


</script>


<style scoped>
	.finish_info{
		 width: 430px;
		 height: auto;
	}



    .finish_info>div:nth-child(1){
      display: flex;
      width: 386px;
      height: 35px;
      padding-left: 44px;

    }
    .finish_info>div:nth-child(1)>span:nth-child(2){
    	  width: 278px;
    	  height: 35px;
    	  display: flex;
    	  align-items: center;
    	  color: gray;
    	  position: relative;
    	  top: -5px;
    }


     .finish_info>div:nth-child(2){
     	 width: 100%;
     	 height: auto;
     	 margin-top: 12px;
     	 display: flex;
     	 justify-content: space-between;
     }

     .finish_info>div:nth-child(2)>span:nth-child(2){
     	  font-size: 20px;
     	  color: black;
     	  font-weight: bold;
     }
     
     .finish_info>div:nth-child(2)>span:nth-child(1){
     	  font-size: 20px;
     	  color: gray;
     }







</style>