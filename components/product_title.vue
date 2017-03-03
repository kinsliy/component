<template>
	 <div class='product_title'>
	 	
          <div class='work_middle'>
         	 {{item.title}}
         </div>

         <div class='work_bottom'>
         	 <span class='left'>
         	 	 ￥<span>{{item.price}}</span>/个
         	 </span>
         	 <div class='right'>
         	 	 <div class='right_left'>
         	 	 	<span>-</span>
         	 	 	<span>1</span>
         	 	 	<span>+</span>
         	 	 </div>
         	 	 <div class='right_right'>
         	 	 	<span>加入心愿清单</span>
         	 	 </div>
         	 </div>

         </div>


	 </div>
   

</template>

<script>
	 export default{
	 	 data(){
	 	 	  return{
                   item:{
                  	  title:'梦百合2.2x1.8m床垫',
                  	  price:'5000',
                  },
	 	 	  }
	 	 },
	 }


</script>
<style scoped>
	 .product_title{
	 	 width: 100%;
	 	 height: 140px;
	 	 background-color: #f8f8f8;
	 	 display: flex;
	 	 flex-direction: column;
	 	 justify-content: center;
	 }
      .product_title .work_middle{
      	 width: 100%;
      	 height: auto;
      	 font-size: 24px;
      	 margin-top: 20px;
      }
     .product_title  .work_bottom {
      	 margin-top: 10px;
      	 display: flex;
      	 /*justify-content: space-between;*/
      }
     .product_title .work_bottom .left{
      	 width: auto;
      	 height: 50px;
      	 
      	margin-right: 264px;
      	 font-weight: bold;

      }
      .product_title .work_bottom .left span{
      	 font-size: 32px;
      	 
      }
      .product_title .work_bottom .right{
      	 width: auto;
      	 height: 50px;
      	 display: flex;
      	 align-items: center;
      }
      .product_title  .work_bottom .right .right_left{
       	  width: 130px;
       	  height: 30px;
       	  display: flex;
       	  margin-right: 25px;
       }
      .product_title  .work_bottom .right .right_left span{
       	   border: 1px solid rgba(0,0,0,0.4);
       }
      .product_title  .work_bottom .right .right_left span:nth-child(1){
       	  width: 30px;
       	  height: 30px;
       	  display: flex;
       	  justify-content: center;
       	  align-items: center;
       	  font-size: 22px;
       }
      .product_title .work_bottom .right .right_left span:nth-child(2){
       	 width: 70px;
       	 height: 30px;
       	 display: flex;
       	 justify-content: center;
       	 align-items: center;
       	 font-size: 26px;

       }
      .product_title  .work_bottom .right .right_left span:nth-child(3){
            width: 30px;
       	  height: 30px;
       	  display: flex;
       	  justify-content: center;
       	  align-items: center;
       	  font-size: 22px;
       }
     .product_title  .work_bottom .right .right_right span{
        width: 168px;
        height: 40px;
        border: 2px solid black;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
      }


</style>