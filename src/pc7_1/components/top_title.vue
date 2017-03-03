<template>
	  <div class='body3'>
	  	  <div class='top'>{{item.title}}</div>
         <div class='middle'>
         	    <div class='left'>
         	 	 <span class='left_l' v-for='item in item.logos'>
         	 	 	 <span><img v-bind:src="item.img"></span>
         	 	 	 <span>{{item.content}}</span>

         	 	 </span>
         	 	 </div>
         	 	 <div class='left_r'>
         	 	    <span><img v-bind:src="item.chat">
         	 	    </span><span><img v-bind:src="item.weibo"></span>
         	 	   </div>
         </div>  
         	 
        <div class='line'>
        	   
        </div>


       <div class='bread'>
       	  <bread :item='bread_data'></bread>
       </div>


	  </div>


</template>

<script >
  var bread=require('./bread.vue');
	 module.exports={
	 	  data:function(){
              return {
              	   bread_data:{
                  flag:false,
                  
                  position:'../../imgs/position.png',
                  title:'首页/活动标题',
                  back:'../../imgs/back.png',
                  },
                   item:{
                   	 title:'资讯内容标题资讯内容',
                   	 chat:'../../imgs/wechat_black.png',
                   	 weibo:'../../imgs/w_black.png',
                   	 logos:[
                       {img:'../../imgs/time.png',content:'2016.02.18',},
                       {img:'../../imgs/du.png',content:'2034',},
                       {img:'../../imgs/heart.png',content:'125',},
                       {img:'../../imgs/hate.png',content:'2',},
                       {img:'../../imgs/comment.png',content:'34',},
                   	  ],

                   }

              }
	 	  },
          components:{
             bread:bread,
		  }

	 }

</script>

<style>
	.body3{
     padding-left: 6.7%;
		 width: 712px;
		 height: 240px;
		
		 

	}
    .body3 .top{
    	 font-size: 24px;
    	 margin-top: 0px;
    	 padding-top: 50px;
    	 width: 100%;
    	 height: auto;
    }
    .body3 .middle{
    	 width: 100%;
    	 height: auto;
    	 margin-top: 30px;
    	 display: flex;
    	 justify-content: space-between;
    }
   
    .middle .left_l{
    	width: auto;
    	height: auto;
    	margin-right: 25px;
    	
    }
    .middle  .left_l >span:nth-child(1){
    	 width: 10px;
    	 height: 10px;
    	 position: relative;
    	 top: 2px;
    }
    .middle .left_l >span:nth-child(2){
    	 margin-left: 3px;
    }
    .middle .left_r{
    	 width:120px;
    	 height: auto;
    	 display: flex;
      justify-content: flex-end;
      padding-right: 5px;
    	 
    }
    .middle .left_r span{
    	 width: 30px;
    	 height: 30px;
    }
    .middle .left_r span:nth-child(1){
    	 margin-right: 10px;
    }

    .line{
    	 width:200px;
    	 height: 2px;
    	 background-color: #ededed;
    	 margin-top: 30px;
    }
    .bread{
    	 width: 100%;
    	 height: auto;
    }
 

</style>