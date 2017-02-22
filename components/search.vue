<template>
	<div id='body'>
		<span><img v-bind:src="item.img"></span>
		<input type="text" v-bind:placeholder="item.text">
	</div>

</template>

<script >
	module.exports={
		 data:function(){
		 	  return {
                   item:{
                     img:'../../imgs/search.png',
                     text:'请输入服务名称/商品名称等...'
                   }
		 	  }
		 },
	}


</script>

<style scoped>
	 #body{
	 	 width: 100%;
	 	 height: auto;
	 	 display: flex;
	 	 
	 	 align-items: center;

	 }
     #body span{
     	  width: 22px;
     	  height: 22px;

     }
     #body span img{
     	width: 20px;
     	height: 20px;
     }
     #body input{
     	 flex-grow: 1;
     	 outline: none;
     	 border:none;
     	 text-indent: 4px;
     	 font-size: 16px;

     }
</style>