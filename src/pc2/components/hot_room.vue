<template>
	<div id='body'>
		 <div id='top'>
		  	   <span>热门房源</span>
		  	   
		  </div>

          <div id='middle'>
          	   <div v-for='item  in  items'>
          	   	   <div class='middle1'>
          	   	   	   <img v-bind:src="item.img">
          	   	   	   <span>{{item.tip}}</span>
          	   	   </div>
          	   	   <div class='middle2'>
          	   	   	    <div>
          	   	   	    	{{item.title}}
          	   	   	    </div>
          	   	   	    <div>
          	   	   	    	<span>￥{{item.price}}</span>
          	   	   	    	<span>{{item.config}}|{{item.size}}</span>
          	   	   	    </div>
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
                     {tip:'YOPARK',img:'../../imgs/rent.jpg',title:'浦东新区汇豪天下三房二厅公寓',price:'15000',config:'2室2厅1卫',size:'98平米'},
                      {tip:'魔方公寓',img:'../../imgs/rent.jpg',title:'浦东新区汇豪天下三房二厅公寓',price:'15000',config:'2室2厅1卫',size:'98平米'},
                       {tip:'YOPARK',img:'../../imgs/rent.jpg',title:'浦东新区汇豪天下三房二厅公寓',price:'15000',config:'2室2厅1卫',size:'98平米'},

                   ],
	 	  	  }
	 	  }
	 }


</script>

<style scoped>
	 #body{
	 	  width: 760px;
	 	  height: 100%;
	 	  /*margin: 0 auto;*/
      margin-bottom: 30px;
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
      	 font-weight: bold;
      }

     #middle{
     	 width: 100%;
     	 height: auto;
     	 display: flex;
     	 margin-top: 19px;
     }
     #middle>div{
     	 width: 240px;
     	 height: auto;
     	 margin-right: 18px;
     }
     #middle>div:nth-child(3){
     	 margin: 0;
     }
     #middle>div .middle1{
     	 width: 100%;
     	 height: 160px;
     	 position: relative;
     }
     #middle>div .middle1 img{
     	 width: 100%;
     	 height: 100%;
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
      #middle .middle2{
      	 margin-top: 13px;
      	 display: flex;
      	 flex-direction: column;

      }
      #middle .middle2>div:nth-child(1){
      	 font-size: 18px;
      	 overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap; 
        color: #6b6b6b;

      }
      #middle .middle2>div:nth-child(2){
      	 margin-top: 13px;
      	 display: flex;
      	 justify-content: space-between;
      	 align-items: center;
      }

      #middle .middle2>div:nth-child(2)>span:nth-child(1){
           font-size: 18px;
           color: #000000;
      }
      #middle .middle2>div:nth-child(2)>span:nth-child(2){
      	 font-size: 14px;
      	 color: #969696;
      }

      @media screen and (min-width: 1500px){
      	  #body{
      	  	 width: 1112px;
      	  }
     	  #middle>div{
     	  	 width: 360px;
     	  }
     	  #middle .middle1{
     	  	 width: 360px;
     	  	 height: 240px;
     	  }
     }
    
</style>