<template>
	<div class='record_lists'>
		 <span>目录</span>
		 <span v-for='item in items'>
		 	 <span>{{item.title}}</span>
		 	 <span>({{item.number}})</span>
		 </span>
	</div>


</template>

<script >
	module.exports={
		 data:function(){
		 	  return{
                  items:[
                     {title:'最近退房',number:2,},
                     {title:'最近入住',number:2,},
                     {title:'最近交房',number:1,},
                     {title:'所有退房',number:3,},
                     {title:'所有入住',number:3,},
                     {title:'全部记录',number:12,},
                  ],
		 	  }
		 }
	}


</script>


<style scoped>
	.record_lists{
		 width: 110px;
		 height: auto;
		 display: flex;
		 flex-direction: column;
	}
    .record_lists span{
    	 width: 100%;
    	 height: 20px;
    	 margin-bottom: 18px;
    }
</style>