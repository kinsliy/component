<template>
	<div id='bar'>
		  <div class='bar_top'>
		  	  <div v-bind:class='{"top_index":item.flag}' v-for='item in bar_tops'>{{item.title}}</div>

		  </div>
         
         <div class='bar_middle'>
             <div>
         	 <div v-bind:class='{"middle_index":item.flag}' v-for='item in bar_middles'>{{item.title}}</div>
         	 </div>
         </div>


        <div class='bar_bottom'>
        	  <div v-for='item in bar_bottoms'>
        	  	  <span><img v-bind:src="item.img"></span>
        	  	  <span>{{item.title}}</span>
        	  </div>
        </div>





	</div>

</template>

<script>
	module.exports={
		  data:function(){
		  	  return{
                   bar_tops:[
                      {flag:true,title:'设备配置'},
                      {flag:false,title:'地图信息'},
                      {flag:false,title:'生活指南'},
                      {flag:false,title:'用户评价'},
                      {flag:false,title:'房屋检测'},

                   ],
                   bar_middles:[
                     {flag:true,title:'标准配置'},
                     {flag:false,title:'全服务'},
                     {flag:false,title:'基本服务'},
                   ],

                   bar_bottoms:[
                     {img:'../../imgs/sofa.png',title:'空调'},
                     {img:'../../imgs/sofa.png',title:'淋浴'},
                     {img:'../../imgs/sofa.png',title:'桌椅'},
                     {img:'../../imgs/sofa.png',title:'沙发'},
                     {img:'../../imgs/sofa.png',title:'衣柜'},
                     {img:'../../imgs/sofa.png',title:'餐桌'},
                     {img:'../../imgs/sofa.png',title:'大床'},
                     {img:'../../imgs/sofa.png',title:'洗衣机'},
                     {img:'../../imgs/sofa.png',title:'灶具'},
                     {img:'../../imgs/sofa.png',title:'宽带'},
                   ],
		  	  }
		  },


	}



</script>


<style scoped>
	 #bar{
	 	 width: 100%;
	 	 height: auto;
	 	 display: flex;
	 	 flex-direction: column;
	 }


     .bar_top{
     	  width: 100%;
     	  height: 68px;
     	  display: flex;
     	  border: 1px solid black;
     }
     .bar_top >div{
     	 display: flex;
     	 flex-grow: 1;
     	 justify-content: center;
     	 align-items: center;
     	 font-size: 20px;
     	 border-right: 1px solid black;
     }
     .bar_top >div.top_index{
     	 background-color: black;
     	 color: white;
     	 font-weight: bold;
     }



     .bar_middle{
     	 width: 100%;
     	 height: 60px;
     	 display: flex;
     	 justify-content: center;
     	 margin-top: 20px;
     }
     .bar_middle>div{
     	 display: flex;
     	 width: 400px;
     	 height: 60px;
     	 justify-content: space-between;

     }
     .bar_middle>div>div{
     	 width: 80px;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     	 font-size: 18px;
     }
     .bar_middle>div>div.middle_index{
     	 border-bottom: 3px solid black;
     	 font-weight: bold;
     }


     .bar_bottom{
     	 width: 100%;
     	 height: auto;
     	 display: flex;
     	 flex-wrap: wrap;
     	 margin-top: 20px;
     }

     .bar_bottom>div{
     	 display: flex;
     	 flex-basis: 16.6%;
     	 
     	 height: 60px;
     	 align-items: center;

     }
     .bar_bottom>div>span{
         width: auto;
         height: auto;
         font-size: 14px;
     }
     .bar_bottom>div>span:nth-child(1){
     	 margin-right: 10px;
     }
     .bar_bottom>div>span img{
     	 width: 100%;
     	 height: 100%;
     }

</style>