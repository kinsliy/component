<template>
	 <div id='title'>
	 	 <div class='title_top'>
	 	 	  <div>
	 	 	  	  <span>{{item.title}}</span>
	 	 	  	  <span>(&nbsp{{item.id}}&nbsp)</span>
	 	 	  	  <span>{{item.rent}}</span>
	 	 	  </div>
	 	 	   <div>
	 	 	  	 <span>￥<span>{{item.price}}</span>/月</span>
	 	 	  </div>
	 	 </div>

      
        <div class='title_middle'>
        	 <div>
        	 	<div>
        	 	 <span>{{item.location}}</span>
                 <span>{{item.aprtment}}</span>
        	 	 </div>
        	 	<div>
        	 		<span>{{item.shi}}室{{item.ting}}厅{{item.wei}}卫&nbsp|</span>
                    <span>{{item.area}}平米&nbsp|</span>
                    <span>{{item.floor}}层&nbsp|</span>
                    <span>{{item.decoration}}&nbsp|</span>
                    <span>{{item.description}}</span>

        	 	</div>

        	 </div>
        	 <div>
        	 	 <span v-bind:class='{"title_index":item.flag}' @mouseover='change(item)' @mouseout='change1(item)'>加入心愿清单</span>
        	 </div>
        </div>


       <div class='title_bottom'>
       	   <span v-for='item  in item.tags'>{{item}}</span>
       </div>




	 </div>

</template>


<script>
	 module.exports={
	 	  data:function(){
	 	  	 return {
                  item:{
                  	  title:'仁恒滨江花园二房一厅公寓',
                  	  flag:false,
                  	  id:'ID1901',
                  	  rent:'可租',
                  	  price:15000,
                  	  location:'上海浦东新区浦城路99弄',
                  	  aprtment:'仁恒滨江花园',
                  	  shi:2,ting:1,wei:1,area:98,
                  	  floor:15,decoration:"精装修",description:'现代简约',
                  	  tags:['月租','北欧风格','北欧风格','家居','月租','北欧风格','北欧','北欧'],
                  }


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
	 #title{
	 	 width: 100%;
	 	 padding-left: 2.1%;
	 	 padding-top: 35px;
	 	 padding-bottom: 30px;
	 }



     .title_top{
     	 width: 100%;
     	 height: auto;
     	 
     	 display: flex;
     }
     .title_top>div:nth-child(1){
        width: auto;
        height: auto;

     }
     .title_top>div:nth-child(1)>span:nth-child(1){
     	 width: auto;
     	 height: auto;
     	 font-size: 26px;
     	 font-weight: bold;
     }
     .title_top>div:nth-child(1)>span:nth-child(3){
        background-color: #333333;
        color: white;
        width: auto;
        height: 15px;
        border-radius: 15px;
        padding: 3px 12px; 
        font-size: 12px;
        position: relative;
        top: -6px;
     }
     .title_top>div:nth-child(2){
     	 margin-left: 16.7%;
     	 width: auto;
     	 height: auto;
     }
     .title_top>div:nth-child(2)>span>span{
     	 font-size: 28px;
     	 font-weight: bold;
     }






     .title_middle{
     	 width: 100%;
     	 height: auto;
     	 margin-top: 15px;
     	 display: flex;
     }
     .title_middle>div:nth-child(1){
     	  display: flex;
     	  flex-direction: column;
     }
     .title_middle>div:nth-child(1)>div:nth-child(1){
     	  font-size: 18px;
     	  color: #a6a6a6;
     }
     .title_middle>div:nth-child(1)>div:nth-child(1)>span:nth-child(2){
         color: #dabd6c;
         margin-left: 15px;
     }

     .title_middle>div:nth-child(1)>div:nth-child(2){
     	  width: auto;
     	  height: auto;
     	  margin-top: 10px;
     	  display: flex;
     }
      .title_middle>div:nth-child(1)>div:nth-child(2)>span{
      	 font-size: 16px;
      	 color: #b5b5b5;
      }

      .title_middle>div:nth-child(2){
      	  width: auto;
      	  height: auto;
      	  margin-left: 24%;
      }
      .title_middle>div:nth-child(2)>span{
      	 width: 180px;
      	 height: 50px;
      	 display: flex;
      	 justify-content: center;
      	 align-items: center;
      	 font-weight: bold;
      	 font-size: 22px;
      	 border-radius: 30px;
      	 border: 2px solid black;
      }



      .title_bottom{
      	 margin-top: 30px;
      	 display: flex;
      }
      .title_bottom>span{
      	 margin-right: 8px;
      	 font-size: 12px;
      	 border: 1px solid #b5b5b5;
      	 color: #b5b5b5;
      	 border-radius: 15px;
      	 padding: 3px 10px;
      }



      .title_index{
      	 background-color: black;
      	 color: white;
      }


</style>