<template>
	<div class='work'>
		 <div class='top'>
		 	  <bread :item='bread_data'></bread>
		 </div>
         <div class='line1'></div>

         <div class='work_middle'>
         	 {{item.title}}
         </div>

         <div class='work_bottom'>
         	 <span class='left'>
         	 	 ￥<span>{{item.price}}</span>/个
         	 </span>
         	 <div class='right'>
         	 	 <div class='right_left'>
         	 	 	<span>-</span>
         	 	 	<span>1</span>
         	 	 	<span>+</span>
         	 	 </div>
         	 	 <div class='right_right'>
         	 	 	<span>加入心愿清单</span>
         	 	 </div>
         	 </div>

         </div>

	</div>


</template>

<script>
  var bread=require('./bread.vue');
	module.exports={
		 data:function(){
		 	 return {
                 bread_data:{
                  
                  
                  position:'../../imgs/position.png',
                  title:'首页/上海公寓租房/静安区/静安豪景/二房公寓',
                  back:'../../imgs/back.png',
                  },
                  item:{
                  	  title:'梦百合2.2x1.8m床垫',
                  	  price:'5000',
                  },

		 	 }
		 },
		  components:{
             bread:bread,
		  }
	}


</script>


<style scoped>
	 .work{
	 	 width: 100%;
	 	 height: 210px;
	  }
      .work .top{
      	 width: 100%;
      	 height: auto;
      }
      .work .line1{
      	 width: 200px;
      	 height: 2px;
      	 background-color: #ededed;
      	 margin-top: 10px;
      }
      .work_middle{
      	 width: 100%;
      	 height: auto;
      	 font-size: 24px;
      	 margin-top: 20px;
      }
      .work_bottom {
      	 margin-top: 10px;
      	 display: flex;
      	 justify-content: space-between;
      }
      .work_bottom .left{
      	 width: auto;
      	 height: 50px;
      	 
      	
      	 font-weight: bold;

      }
      .work_bottom .left span{
      	 font-size: 32px;
      	 
      }
      .work_bottom .right{
      	 width: auto;
      	 height: 50px;
      	 display: flex;
      	 align-items: center;
      }
       .work_bottom .right .right_left{
       	  width: 130px;
       	  height: 30px;
       	  display: flex;
       	  margin-right: 25px;
       }
       .work_bottom .right .right_left span{
       	   border: 1px solid rgba(0,0,0,0.4);
       }
       .work_bottom .right .right_left span:nth-child(1){
       	  width: 30px;
       	  height: 30px;
       	  display: flex;
       	  justify-content: center;
       	  align-items: center;
       	  font-size: 22px;
       }
       .work_bottom .right .right_left span:nth-child(2){
       	 width: 70px;
       	 height: 30px;
       	 display: flex;
       	 justify-content: center;
       	 align-items: center;
       	 font-size: 26px;

       }
       .work_bottom .right .right_left span:nth-child(3){
            width: 30px;
       	  height: 30px;
       	  display: flex;
       	  justify-content: center;
       	  align-items: center;
       	  font-size: 22px;
       }
      .work_bottom .right .right_right span{
        width: 168px;
        height: 40px;
        border: 2px solid black;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
      }



</style>