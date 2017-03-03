<template>
	<div class='body' >
		  <div >
		  	 <span><img v-bind:src="item.position"></span>
		  	 <span class='bread'>{{item.title}}</span>
		  </div>

		  <div>
		  	 <span><img v-bind:src="item.back"></span>
		  	 <span class='bread1'>返回</span>
		  	 <span v-if='item.flag'><img src="../../../imgs/grey_open.png"></span>
		  </div>
	</div>


</template>

<script >
	module.exports={
		  data:function(){
		  	  return{

		  	  }
		  },
		  props:['item'],

	}


</script>

<style scoped>
	 .body{
	 	 
	 	 height: 65px;
	 	 
	 	 
	 	 width: 100%;
	 	 display: flex;
	 	 justify-content: space-between;
	 	 align-items: center;
     background-color: #f8f8f8;
	 }
     .body >div:nth-child(1){
     	padding-left: 2.1%;
        display: flex;
        align-items: center;
        height: 50px;
     }
      .body div:nth-child(1) >span:nth-child(1){
         width: 15px;
         height: 20px;
        
      }
      .body div:nth-child(1) >span:nth-child(1) img{
      	 position: relative;
      	 top: 1px;
      }
      .body div:nth-child(2){
         padding-right: 2.1%;
         display: flex;
         height: 50px;
      }
      .body div:nth-child(2)> span{
        display: flex;
        align-items: center;
        margin-left:20px;

      }
      .body div:nth-child(2)> span:nth-child(3) img{  box-shadow: 2px 2px 1px gray;
        

       }
      .bread,.bread1{
      	 /*color: white;*/
         color: #c9c9c9;
      }
      .bread1{
      	 font-size: 22px;
      }
</style>