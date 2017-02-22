<template>
	  <div id='infos'>
	  	  <div class='face'>
	  	           <div id='error'>
	  	  	       	  <img src="../imgs/grey_close.png" @mouseover='move' @mouseout='leave'>
	  	  	        </div>
	  	  	   <div class='left'>
	  	  	       
	  	  	   	   <span ><img src="../imgs/me.png"></span>
	  	  	   	   <span class='p_l'>sundaybreak</span>
	  	  	   </div>
	  	  	   <div class='right'>
	  	  	   	  <span><img src="../imgs/news01.png"></span>
	  	  	   </div>
	  	  </div>

	  	  <div class='face face1 ' >
	  	  	   <div class='left btm'>
	  	  	   	   <span ><img src="../imgs/fang.png"></span>
	  	  	   	   <span class='p_l'>预约看房记录</span>
	  	  	   	   <span class='p_l1 tip'>13</span>
	  	  	   </div>
	  	  	   
	  	  </div>
	 

	   <div class='face face1 '>
	  	  	   <div class='left btm'>
	  	  	   	   <span ><img src="../imgs/can.png"></span>
	  	  	   	   <span class='p_l'>商品订单管理</span>
	  	  	   	   <span class='p_l1 tip'>2</span>
	  	  	   </div>
	  	  	  
	  	  </div>
	

	   <div class='face face1 '>
	  	  	   <div class='left btm'>
	  	  	   	   <span ><img src="../imgs/server.png"></span>
	  	  	   	   <span class='p_l'>服务订单管理</span>
	  	  	   	   <!-- <span class='p_l1 tip'>13</span> -->
	  	  	   </div>
	  	  	  
	  	  </div>
	

	   <div class='face face1 '>
	  	  	   <div class='left btm'>
	  	  	   	   <span ><img src="../imgs/live.png"></span>
	  	  	   	   <span class='p_l'>生活缴费</span>
	  	  	   	  <!--  <span class='p_l1 tip'>13</span> -->
	  	  	   </div>
	  	  	  
	  	  </div>
	
 
	   <div class='face face1 '>
	  	  	   <div class='left'>
	  	  	   	   <span ><img src="../imgs/repair.png"></span>
	  	  	   	   <span class='p_l'>报修服务</span>
	  	  	   	  <!--  <span class='p_l1 tip'>13</span> -->
	  	  	   </div>
	  	  	  
	  	  </div>
           

           <div class='face face1 '>
	  	  	   <div class='left person'>
	  	  	   	    进入个人中心
	  	  	   </div>
	  	  	  
	  	  </div>




	  </div>

</template>

<script >
	 module.exports={
	 	 data:function(){
	 	 	  return {

	 	 	  }
	 	 },
	 	 methods:{
	 	 	  move:function(e){
                 e.target.src='../../imgs/yellow_close.png'
	 	 	  },
	 	 	  leave:function(e){
                 e.target.src='../../imgs/grey_close.png'
	 	 	  },
	 	 }
	 }

</script>

<style scoped>
	 #infos{
	 	  width: 100%;
	 	  height: 600px;
	 }
     .face,.face1{
     	  width: 100%;
     	  height: 60px;
     	  display: flex;
     	  justify-content: space-between;
     	  align-items: center;
     	  position: relative;
     }

     .face div{
     	 width: auto;
     	 height: 60px;

     }
     .btm{
     	 border-bottom: 0.1px solid #CDC9C9;
     }
     .face span{
     	 width: auto;
     	 height: 60px;
     	 display: flex;
     	 align-items: center;
     	 font-size: 16px;
     }
     .face .left{
     	 margin-left: 25px;
     	 display: flex;
     	 align-items: center;
     	 width: 295px;
     	 margin-right: -22px;
     }
     .left.person {
     	 border-radius: 30px;
     	 height: 35px;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     	 font-size: 18px;
     	 border: 2px solid #CDC9C9;
     	 color: gray;
     }
     .face .right{
     	 margin-right: 25px;
     }
     .p_l{
     	 padding-left: 10px;
     }
     .p_l1{
     	  margin-left: 20px;
     }
     .face1{
     	 height: 80px;
     	 font-size: 12px;
     }
     .face1 .tip{
     	 background-color: red;
     	 padding: 5px;
     	 border-radius: 10px;
     	 height: 7px;
     	 width: 30px;
     	 font-size: 12px;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     }

     .face #error{
     	  position: absolute;
          top: 10px;
          left: -45px;
          width: auto;
          height: auto;
          background-color: 
     }


</style>