<template>
	<div id='body'>
		  <div id='top'>
		  	   <span>热门资讯</span>
		  	   <span>更多</span>
		  </div>
          <div  id='middle'>
          	  <div v-for='item in  items'>
          	  	   <div class='middle1'>
          	  	   	  <span>{{item.tip}}</span>
          	  	   	  <img v-bind:src="item.img">
          	  	   </div>
          	  	   <div class='middle2'>
          	  	   	  {{item.title}}
          	  	   </div>
          	  </div>
          </div>
  

	</div>


</template>

<script >
	 module.exports={
	 	   data:function(){
	 	   	  return {
                   items:[
                    {tip:'游上海',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {tip:'享上海',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {tip:'食上海',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {tip:'居上海',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                   ]
	 	   	  }
	 	   },
       




	 }
 
</script>


<style scoped>
	  #body{
	  	 width: 760px;
	  	 height: 100%;
	  	 margin: 0 auto;
	  }
      #top{
      	 width: 100%;
      	 height: 50px;
      	 display: flex;
      	 justify-content: space-between;
      	 align-items: center;
      	 font-size: 18px;
      }
      #top span{
      	 width: auto;
      	 height: 50px;
      	 display: flex;
      	 justify-content: flex-start;
      	 align-items: center;
      	 color: #a7a7a7;
         /*font-weight: bold;*/

      }
      #top span:nth-child(2){
      	height: auto;
      	 justify-content: flex-end;
      	 border: 1px solid #adadad;
      	 font-size: 14px;
      	 padding-top: 3px;
      	 padding-bottom: 3px;
      	 padding-left: 15px;
      	 padding-right: 15px;
      	 border-radius: 15px;
      }

      #middle{
      	 width: 100%;
      	 height: auto;
      	 margin-top: 10px;
      	 display: flex;

      }
      #middle>div{
      	 width: 175px;
      	 height: auto;
      	 display: flex;
      	 flex-direction: column;
      	 margin-right: 20px;
      }
      #middle>div:nth-child(4){
      	 margin-right: 0px;
      }
      #middle .middle1{
      	 width: 175px;
      	 height: 120px;
      	 position: relative;

      }
      #middle .middle1 span{
      	  position: absolute;
      	  top: 13px;
      	  left: 10px;
      	  border: 1px solid black;
      	  font-size: 12px;
      	  padding-top: 1px;
      	 padding-bottom: 1px;
      	 padding-left: 5px;
      	 padding-right: 5px;
      	 border-radius: 15px;
      	 background-color: rgba(255,255,255,0.4);
      	 
      }
      #middle .middle1 img{
      	 width: 100%;
      	 height: 100%;
      }
      
      #middle .middle2{
      	 margin-top: 15px;
      	 font-size: 18px;
      	 width: 100%;
      	 height: 25px;

      	 overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap; 
      	 
      	 justify-content: flex-start;
      }
  
      @media screen and (min-width: 1500px){
      	  #body{
      	  	 width: 1112px;
      	  }
     	  #middle>div{
     	  	 width: 263px;
     	  }
     	  #middle .middle1{
     	  	 width: 263px;
     	  	 height: 180px;
     	  }
     }
    


</style>