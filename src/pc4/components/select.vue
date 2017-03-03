<template>
	 <div class='select'>
	 	 <div class='select_top'>
	 	 <span>{{item1.title}}</span
	 	 >
	 	 <span><img v-bind:src="item1.img"></span>
	 	 </div>

	 	 <div v-show='item1.flag'  class='select_middle'>
	 	 	 <div v-for='item in item1.contents'> 	
	 	 	 	{{item.content}}
	 	 	 </div>
	 	 </div>

	 </div>


</template>

<script >
	module.exports={
		  data:function(){
             return {  
                  item1:{
                    title:'选择服务或商品',
                    flag:false,
                    img:'../../imgs/arrow_down.png',
                    contents:[
                      {flag:false,content:'不租',},
                      {flag:false,content:'整租',},
                      {flag:false,content:'合租',},
                    ]
                  },
             }
		  },
		  props:[],

	}



</script>


<style scoped>
	.select{
		 width: 177px;
		 height: 30px;
		 border: 1px solid #d7d7d7;
		 padding: 5px;
		 position: relative;
     margin-right: 2.1%;

	}
   .select .select_top{
   	 width: 100%;
   	 height: 100%;
   	 display: flex;
   	 justify-content: space-between;
   	 align-items: center;
     
     color: #d7d7d7;

   }
   
   .select_middle{
   	 position: absolute;
   	 top: 40px;
   	 left: -1px;
   	 width: 100%;
   	 height: auto;
   	 border: 1px solid #d7d7d7;
   }
    .select_middle >div{
    	 width: 100%;
    	 height: 40px;
    	 padding-left: 2px;
    	 display: flex;
    	 align-items: center;
    	 border-top: 1px solid #d7d7d7;

    }
    .select_middle >div:nth-child(1){
    	 border-top: none;
    }


</style>