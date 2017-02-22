<template>
	<div id='body'>
		  <div class='top'>
		  	 <img v-bind:src="rong.img">
		  </div>
         <div class='content' v-for='item in rong.items'>
         	  {{item.content}}
         </div>

         <div class='down'>
         	<div @click='change'>
         		<img v-bind:src="like"><span>喜欢Ta</span>
         	</div>
         	<div @click='change1'>
         		<img v-bind:src="down"><span>踩一踩</span>
         	</div>
         </div>


         <div class='tag'>
         	 <div>
         	 	<span v-for='item in tips'>{{item}}</span>
         	 </div>

         	 <div>
         	 	<span><img src="../imgs/wechat_black.png"></span>
         	 	<span><img src="../imgs/w_black.png"></span>
         	 </div>
         	
         </div>


	</div>


</template>

<script >
	 module.exports={
	 	  data:function(){
	 	  	  return {
	 	  	  	 tips:['月租','北欧风格','北欧风格','家居'],
	 	  	  	  like:'../../imgs/like_black.png',
	 	  	  	  down:'../../imgs/down.png',
                  rong:{
                  	 img:'../../imgs/hot_info.jpg',
                  	 items:[
                       {content:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',},
                       {content:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',},
                       {content:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',},
                       {content:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',}
                  	 ]
                  }
	 	  	  }
	 	  },
	 	  methods:{
              change:function(){
              	  this.like='../../imgs/like_y.png'
              },
              change1:function(){
              	 this.down='../../imgs/down_y.png'
              }
	 	  }
	 }


</script>

<style scoped>
	#body{
		 width: 487px;
		 height: auto;
		 display: flex;
		 flex-direction: column;
	}
    .top{
    	 width: 100%;
    	 height: 320px;
    }
   .top img{
   	 width: 100%;
   	 height: 100%;
   }

    .content{
    	 width: 100%;
    	 height: auto;
    	 margin-top: 20px;
    	 font-size: 16px;
    	 color: #959595;
    }

    .down{
    	 margin-top: 20px;
    	 width: 100%;
    	 height: 30px;
    	 display: flex;
    	 font-size: 18px;
    	 margin-bottom: 20px;
    }
    .down >div{
    	 display: flex;

    }
    .down >div >img{
       width: 30px;
       height: 30px;

    }
    .down >div >span{
    	 margin-left: 10px;
    	 display: flex;
    	 align-items: center;
    }
    .down >div:nth-child(2){
    	 margin-left: 50px;
    	 height: 100%;
    }

    .tag{
    	 display: flex;
    	 justify-content: space-between;
    	 padding-top: 30px;
    	 border-top: 1px solid #f1f1f1;
    	 width: 100%;
    	 height: auto;
    }

     .tag >div:nth-child(1) span{
       	  font-size: 12px;
       	  margin-right: 5px;
       	  border: 1px solid #878685;
       	   padding-top: 3px;
      	 padding-bottom:3px;
      	 padding-left: 9px;
      	 padding-right:9px;
      	 border-radius: 15px;
      	 color: #cacaca;
       }
       .tag >div:nth-child(2) {
       	display: flex;

       }
       .tag >div:nth-child(2) span{
       	 width: 20px;
       	 height: 20px;
       	 margin-left: 15px;
       }
       .tag >div:nth-child(2) span img{
       	 width: 100%;
       	 height: 100%;
       }

</style>