<template>
	<div id='body'>
		 <div@mouseout='hide(item)' @mouseover='show(item)' v-for='item in items'>
		 	  <div class='bg' v-show='item.flag' >
		 	  	  <span>{{item.content}}</span>
		 	  </div>
		 	  <img v-bind:src="item.img">
		 	  <span v-show='!item.flag'>{{item.title}}</span>
		 </div>
	</div>

</template>


<script >
	module.exports={
		 data:function(){
		 	  return {
                  items:[
                    {
                      flag:false,img:'../../imgs/life.png',content:'内容描述内容描述',title:'生活服务',
                    },
                    {
                      flag:false,img:'../../imgs/cook.png',content:'内容描述内容描述',title:'家具家电',
                    },
                    {
                      flag:false,img:'../../imgs/weixiu.png',content:'内容描述内容描述',title:'专业保洁',
                    },
                    {
                      flag:false,img:'../../imgs/wash.png',content:'内容描述内容描述',title:'房屋维修',
                    },
                    {
                      flag:false,img:'../../imgs/service.png',content:'内容描述内容描述',title:'生活服务',
                    },

                  ]
		 	  }
		 },
		 methods:{
            show:function(item){
               item.flag=true;
            },
            hide:function(item){
            	  item.flag=false;
            }




		 },


	}


</script>


<style scoped>
	 #body{
	 	 width: 100%;
	 	 height: auto;
	 	 display: flex;
	 }
     #body >div{
        width: 20%;
        height: 0;
        padding-bottom: 20%;
        overflow: hidden;
        position: relative;
        
     }
     #body .bg{
     	 position: absolute;
     	 top: 0;
     	 left: 0;
     	 width: 100%;
     	 height: 100%;
     	 background-color: rgba(164,84,0,0.6);
     	 z-index: 999;
     	 display: flex;
     	 align-items: center;
     	 justify-content: center;
     } 
     #body .bg span{
         width: 57%;
         height: 40px;
         overflow: hidden;
         text-align: center;
         font-size: 14px;
         color: white;
         text-shadow: 0px 6px 2px #a45400;
     }
     #body >div >img{
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
     }
     #body >div >span{
     	 z-index: 99999;
     	 color: white;
     	 font-size: 16px;
     	 position: absolute;
     	 width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
        justify-content:center;
        align-items: center;
     }

     @media screen and (min-width: 1500px){
      	   #body >div >span{
     	
     	 font-size: 30px;
         }
         #body .bg span{
         	 font-size: 26px;
         }
     }

</style>