<template>
	 <div id='body'>
	 	 <img v-bind:src="item.img">
         <div class='bg'></div>
         <div class='content'>
         	  <div class='top'><bread :item='bread_data'></bread></div>

         	  <div class='middle'>
         	  	   <div  class='content1'>
         	  	   	    <p>{{item.title}}</p>
         	  	   	    <span>{{item.tip}}</span>
         	  	   	    <img v-bind:src="item.img1">
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
                   item:{
                   	  img:'../../imgs/music.png',
                   	  title:'单身贵族',
                   	  tip:'一个人过，也要精彩生活',
                   	  img1:'../../imgs/play.png',
                   },
                   bread_data:{
                  flag:true,
                  
                  position:'../../imgs/position_white.png',
                  title:'首页/上海公寓租房/静安区/静安豪景/二房公寓',
                  back:'../../imgs/back_white.png',
                  },


		  	  }
		  },
		  components:{
             bread:bread,
		  }
	}



</script>


<style scoped>
	 #body{
	 	 width: 100%;
	 	 height: 0;
	 	 padding-bottom: 48.7%;
	 	 position: relative;
	 }
     #body > img{
     	 position: absolute;
     	 width: 100%;
     	 height: 100%;
     	 top: 0;
     	 left: 0;
     }
     #body .bg{
     	 position: absolute;
     	 width: 100%;
     	 height: 100%;
     	 background-color: rgba(255,255,255,0.4);
     	 z-index: 99999;
     }
     #body .content{
     	 position: absolute;
     	 width: 100%;
     	 height: 100%;
     	 z-index: 99999999;
     	 display: flex;
     	 flex-direction: column;
     }
     #body .content .top{
     	 width: 100%;
     	 height:60px;
     	 display: flex;
     	 align-items: center; 
     	 border-bottom: 1px solid rgba(255,255,255,0.1);
     }
     .content .middle{
     	  flex-grow: 1;
     	  display: flex;
     	  padding-right: 9.6%;
     	  align-items: center;
     	  justify-content: flex-end;
     }
     .content .middle .content1{
     	 width: auto;
     	 height: 166px;
     	 display: flex;
     	 flex-direction: column;
     	 align-items: flex-end;
     }
      .content .middle .content1 p{
      	 font-size: 36px;
      	 color: white;
      	 margin:0;
      	 text-align: right;
      }
      .content .middle .content1  span{
      	 width: auto;
      	 height: auto;
      	 margin-top: 12px;
      	 color: white;
      	 font-size: 18px;
      	 text-align: right;
      }
      .content .middle .content1  img{
      	 display: flex;
      	 margin-top: 40px;
      	 width: 50px;
      	 height: 50px;

      }
</style>