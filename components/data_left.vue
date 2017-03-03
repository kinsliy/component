<template>
	<div id='data_left'>
		<div class='data_left_top'>
			 <img v-bind:src="item.img">
		</div>
    
      <div class='data_left_middle'>
      	  <div class='data_left_index'>个人资料</div>
      	  <div>收货地址</div>
      	  <div>修改资料</div>

      </div>



	</div>


</template>

<script>
	 module.exports={
	 	  data:function(){
	 	  	  return{
                   item:{
                   	 img:'../../imgs/data_face_circle.png',
                   }

	 	  	  }
	 	  },
	 }




</script>


<style scoped>
	 #data_left{
	 	 width: 100px;
	 	 height: 250px;
	 	 display: flex;
	 	 flex-direction: column;
	 }
     
     .data_left_top{
     	 width: 100%;
     	 height: 70px;
     	 display: flex;
     	 justify-content: center;
     }
     .data_left_top img{
     	 width: 70px;
     	 height: 70px;

     }
     
     .data_left_middle{
     	 width: 100%;
     	 height: auto;

     }
     .data_left_middle >div{
     	  width: 100%;
     	  height: auto;
     	  margin-top: 30px;
     	  display: flex;
     	  justify-content: center;
     	  font-size: 18px;
     }

     .data_left_index{
     	 font-weight: bold;
     	 color: black;
     }




</style>