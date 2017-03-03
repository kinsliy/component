<template>
	<div id='body'>
		 <div class='left'>
		 	 <div>
		 	 	<img src="../../../imgs/pre.png"><span>上一篇</span>
		 	 </div>
		 	 <span>
		 	 	 {{item.pre}}
		 	 </span>
		 </div>
		 <div class='left'>
		 	 <div class='right'>
		 	 	<span>下一篇</span>
		 	 	<img src="../../../imgs/next.png">
		 	 </div>
		 	 <span>
		 	 	 {{item.next}}
		 	 </span>
		 </div>
	</div>


</template>

<script>
	 module.exports={
	 	  data:function(){
	 	  	 return {
                   item:{
                   	  pre:'沪上手工艺精品展',
                   	  next:'明星开的餐馆你吃过几家？'
                   }
	 	  	 }
	 	  },
	 	  methods:{

	 	  }
	 }


</script>


<style scoped>
	 #body{
         width: 100%;
         height: auto;
         display: flex;
         margin-top: 50px;
         justify-content: space-between;
	 }
     .left {
        display: flex;
        flex-direction: column;
        
     }
     .left >div{
     	  width:auto;
     	  height: 15px;
     	  font-size: 14px;
     	  color: #bbbbbb;
     }
     .left >div img{
     	 width: 10px;
     	 height: 10px;
     }
     .right{
     	 text-align: right;
     }
     .left >span{
     	 margin-top:9px; 
     	 font-size: 18px;
     	 width: auto;
     	 height: auto;
         text-align: right;
     }
</style>