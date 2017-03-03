<template>
	<div id='person_img'>
		 <img v-bind:src="item.img">

        <div class='person_img_bottom'>
        	 <bread :item='bread_data'></bread>
        	 
        </div>
	</div>


</template>

<script>
 var bread=require('./bread.vue')
	module.exports={
		 data:function(){
		 	 return{
                item:{
                	 img:'../../imgs/music.png',
                },
                bread_data:{
                	 flag:false,
                	 position:'../../imgs/position_white.png',
                	 title:'首页/个人中心',
                	 back:'../../imgs/back_white.png',
                }
 
		 	 }

		 },
		 components:{
		 	 bread:bread,
		 }

	}


</script>


<style scoped>
	 #person_img{
	 	 width: 100%;
	 	 height: 0;
	 	 padding-bottom: 32%;
        position: relative;
	 }
     #person_img>img{
     	 position: absolute;
     	 width: 100%;
     	 height: 100%;
     }

     .person_img_bottom{
     	 position: absolute;
     	 width: 100%;
     	 
     	 height: 70px;
     	 border-top: 1px solid rgba(255,255,255,0.2);
     	 left: 0;
     	 bottom:0;
     	 display: flex;
     	 align-items: center;
     }
</style>