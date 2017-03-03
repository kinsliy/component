<template>
	 <div id='body'>
	 	 <div class='top'>猜你喜欢</div>
         
         <div class='like' v-for='item in items'>
         	  <div class='top' @mouseover='change(item)' @mouseout='change1(item)'>
         	  	  <img v-bind:src="item.img">
         	  	  <div v-show='item.flag'>
         	  	  	 {{item.bg}}
         	  	  </div>
         	  </div>
         	  <div class='middle'>
         	  	  <span class='text'>{{item.title}}</span>
         	  	  <div class='middle_bottom'>
         	  	  	 <span>
         	  	  	 	<img src="../../../imgs/hot.png"><span>{{item.hot}}</span>
         	  	  	 </span>
         	  	  	 <span >
         	  	  	 	 <img src="../../../imgs/heart.png"><span>{{item.heart}}</span>
         	  	  	 </span>
         	  	  </div>
         	  </div>

         </div>
	 </div>


</template>

<script>
	module.exports={
		  data:function(){
		  	  return {
                 items:[
                   {flag:false,img:'../../imgs/guess.png',title:'沪上最美餐厅前10名最美餐厅',hot:125,heart:2034,bg:'美食/上海/单身'},
                   {flag:false,img:'../../imgs/guess.png',title:'沪上最美餐厅前10名',hot:125,heart:2034,bg:'美食/上海/单身'},
                   {flag:false,img:'../../imgs/guess.png',title:'沪上最美餐厅前10名',hot:125,heart:2034,bg:'美食/上海/单身'},
                   {flag:false,img:'../../imgs/guess.png',title:'沪上最美餐厅前10名',hot:125,heart:2034,bg:'美食/上海/单身'},
                 ],
		  	  }
		  },
		  methods:{
		  	  change:function(item){
                 item.flag=true;
		  	  },
		  	  change1:function(item){
                 item.flag=false;
		  	  }
		  }

	}


</script>

<style scoped>
	#body{
		  width:155px;
		  height: auto;
		  display: flex;
      margin-top: 30px;
		  flex-direction: column;
	}
    .top{
    	 width:100%;
    	 height: auto;
    	 margin-bottom: 15px;
    	 font-size: 18px;
    }
    .like{
    	width:100%;
    	height: auto;
    	margin-bottom: 30px;
    }
    .like .top{
    	 width: 100%;
    	 height:110px; 
    	 position: relative;
    }
    .like .top img{
    	 width: 100%;
    	 height: 100%;
    }
    .top >div{
    	 position: absolute;
    	 width: 100%;
    	 height: 100%;
    	 top: 0;
    	 left: 0;
    	 background-color:rgba(209,187,127,0.8);
    	 display: flex;
    	 justify-content: center;
    	 align-items: center;
    	 color: white;
    	 font-size: 14px;
    }
    .middle{
    	width: 100%;
    	height: auto;
      display: flex;
      flex-direction: column;

    }
    span.text{
       font-size: 16px;
       display: block;
       width: 100%;
         height: 25px;

         overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap; 
         
        
    }
    .middle_bottom{
    	 margin-top: 10px;
    	 display: flex;
    	 justify-content: space-between;
    }
  .middle_bottom img{
  	 position: relative;
  	 top: 1px;
  }
  .middle_bottom >span >span{
  	 margin-left: 5px;
  }

   @media screen and (min-width: 1500px){
      	  #body{
      	  	 width: 232.5px;
      	  }
      	  .like .top{
      	  	 height: 165px;
      	  }
     }

</style>