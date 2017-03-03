<template>
	 <div class='fill_info_top'>
	        
	          	  <img v-bind:src="item.img">
	        
	 	 <div class='wrap'>
               


	 	 	  <div class='top'>
	 	 	{{item.title}}&nbsp{{item.aprtment}}
	 	    </div>

            <div class='middle'>
            	<div>
            		￥<span>{{item.price}}</span>/月
            	</div>

            	<div>
            		{{item.location}}
            	</div>
            </div>

           
            <div class='line'>
            	
            </div>

          
            <div class='bottom'>
            	 <bread :item='bread_data'></bread>
            </div>



	 	 </div>



	 </div>

</template>

<script>
 import bread from './bread.vue';
	 export default{
	 	  data(){
             return{ 
                item:{
                	  title:'浦东新区汇豪天下三方二厅  ',
                	  aprtment:'03栋33E',
                	  price:15000,

                	  location:'潍坊西路1-2弄',
                	  img:'../../imgs/grey_open.png',
                },
                 bread_data:{
                   flag:false,
                   position:'../../imgs/position.png',
                   title:'首页/个人中心',
                   back:'../../imgs/back.png',
                } 


             }
	 	  },
	 	  components:{
	 	  	  bread:bread,
	 	  }
	 }



</script>

<style scoped>
	 .fill_info_top{
	 	  width: 100%;
	 	  height: 0;
	 	  padding-bottom: 28.9%;
	 	  background-color: #f8f8f8;
	 	  
	 	  
	 	  position: relative;
	 }
     .fill_info_top img{
     	  
     	  
     	  position: absolute;
     	  top: 10px;
     	  right: 0px;
     	  
     	  }
     .fill_info_top .wrap{
     	 position: absolute;
     	 width: 100%;
     	 height: 100%;

     }



     .fill_info_top .top{
           font-size: 22px;
           color: black;
           font-weight: normal;
           margin-top: 31px;
     }

    
      .fill_info_top .middle{
      	  width: 100%;
      	  height: auto;
      	  margin-top: 20px;
      	  display: flex;
      	  justify-content: flex-start;
      }
      .fill_info_top .middle>div:nth-child(1){
      	  font-weight: bold;
      	  color: black;
      	  font-size: 20px;
      	  display: flex;
      	  align-items: flex-end;
      }
      .fill_info_top .middle>div:nth-child(1) span{
      	 font-size: 30px;
      	 position: relative;
      	 top: 4px;
      }


     
      .fill_info_top .middle>div:nth-child(2){

       width: 300px;
       height: 40px;
       margin-left:22px;
       font-size: 16px;
       color: #a1a1a1;
       display: flex;
       align-items: flex-end;
      }


      .fill_info_top .line{
      	 width: 204px;
      	 height: 2px;
      	 background-color: #ededed;
      	 margin-top: 25px;
      }





</style>