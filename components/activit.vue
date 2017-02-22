<template>
	 <div id='body'>
	 	 <div v-for='item in items'>
	 	 	  <div class='middle1'>
          	  	   	  <span v-bind:class='{"index":item.flag}'>{{item.tip}}</span>
          	  	   	  <img v-bind:src="item.img">
          	  	   </div>
          	  	   <div class='middle2'>
          	  	   	  {{item.title}}
          	  	   </div>

	 	 </div>
	 </div>


</template>

<script >
	module.exports={
		  data:function(){
		  	 return {
                 items:[
                    {flag:false,tip:'进行中',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {flag:false,tip:'进行中',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {flag:true,tip:'已结束',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {flag:false,tip:'进行中',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {flag:false,tip:'进行中',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {flag:false,tip:'进行中',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {flag:true,tip:'已结束',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {flag:false,tip:'进行中',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                    {flag:false,tip:'进行中',img:'../../imgs/hot_info.jpg',title:'资讯内容标题资讯标题咨询'},
                   ]
		  	 }
		  },
	}



</script>


<style scoped>

	#body{
		  width: 750px;
		  height: auto;
		  margin: 0 auto;
		  display: flex;
		  flex-wrap: wrap;
	}
     #body>div{
      	 width: 237px;
      	 height: auto;
      	 display: flex;
      	 flex-direction: column;
      	 margin-right: 17px;
      	 margin-top: 30px;
      }
      #body>div:nth-child(3n){
      	 margin-right: 0px;
      }
      #body .middle1{
      	 width: 237px;
      	 height: 237px;
      	 position: relative;

      }
      #body .middle1 span{
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

      #body .middle1 span.index{
    	 background-color: #354755;
    	 color: white;
    }
      #body .middle1 img{
      	 width: 100%;
      	 height: 100%;
      }
      
      #body .middle2{
      	 margin-top: 15px;
      	 font-size: 18px;
      	 width: 100%;
      	 height: 25px;

      	 overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap; 
      	 
      	 justify-content: flex-start;
      }
  

</style>