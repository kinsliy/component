<template>
	<div class='body'>
		 <p><span>{{item.top}}</span>{{item.title}}</p>
		 <p>{{item.title}}<span @click='change(item)' class='open' v-if='item.flag'>展开<img src="../imgs/open.png"></span><span v-if='!item.flag'>{{item.content}}</span></p>

	</div>


</template>

<script>
   module.exports={
   	  data:function(){
         return {
             item:{
             	  flag:true,
             	  top:'静',
             	  title:'安枫景由新加坡吉宝置业与上海市与上海市与上海市与上海市与上海市与上海市与上海市与上海市与上海市与上海市与上海市与上海市,',
             	  content:'安枫景由新加坡吉宝置业与上海市与上海市与上海市与上海市与上海市与上海市与上海市与上海市与上海市与上海市与上海市与上海市,',
             }
         }
   	  },
      methods:{
      	  change:function(item){
            item.flag=false;
      	  },
      },



   }	


</script>

<style scoped>
	 .body{
	 	 width: 100%;
	 	 height: auto;
	 	 margin-top: 40px;
	 }
     .body p{
     	 margin-bottom:20px;
     	 text-indent: 18px;
     }
      .body p:nth-child(1) span{
      	  font-size: 30px;
      	  font-weight: bold;
      }
      .open{
      	 color: #d7b760;
      	 padding-left: 10px;

      }
      .open img{
      	 width: 20px;
      	 height: 16px;
      	 position: relative;
      	 top: 4px;
      	 
      	 margin-left: 3px;
      }
</style>