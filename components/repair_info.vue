<template>
	<div class='repair_info'>
		 <div>
		 	<input type="text" placeholder="收货人姓名">
		 	<input type="text" placeholder="联系电话">
		 </div>

		 <div>
		 	<div>
		 		<span>选择城市</span>
		 		<span><img src="../imgs/arrow_down.png"></span>
		 	</div>
		 	<div>
		 		<span>选择区县</span>
		 		<span><img src="../imgs/arrow_down.png"></span>

		 	</div>

		 </div>


        <div>
        	<input type="text" placeholder="请填写详细地址">
        </div>

        <div>
        	<input type="text" placeholder="备注信息">
        </div>

       
       <div class='repair_img'>
       	   <div class='repair_add_img'>
       	      <span><img src="../imgs/add_img.png"></span>
       	      <span>上传照片</span>
       	   	  <input type="file" >
       	   </div>
       </div>


     <div class='repair_btn'>
     	  <span>提交报修</span>
     </div>



	</div>
</template>


<script>
	export default{
		  data(){
             return{

             }
		  },

	}





</script>


<style>
	 .repair_info{
	 	 width: 440px;
	 	 height: auto;
	 }
     


      .repair_info>div:nth-child(1){
      	 width: 100%;
      	 height: 40px;
      	 display: flex;
      }
      .repair_info>div:nth-child(1) input{
      	 width: 213px;
      	 height: 38px;
      	 border: 1px solid #e1e1e1;
      	 text-indent: 8px;
      	 font-size: 15px;

      }
      .repair_info>div:nth-child(1) input:nth-child(2){
      	 margin-left: 10px;
      }



      .repair_info>div:nth-child(2){
      	 width: 100%;
      	 height: 40px;
      	 margin-top: 10px;
      	 display: flex;
      }
      .repair_info>div:nth-child(2)>div{
      	  width: 193px;
      	  height: 38px;
      	  border: 1px solid #e1e1e1;
      	  padding: 0 10px;
      	  display: flex;
          color: #b6b6b6;
      	  align-items: center;
      	  justify-content: space-between;
      }
      .repair_info>div:nth-child(2)>div:nth-child(2){
      	 margin-left: 10px;
      }




      .repair_info>div:nth-child(3),.repair_info>div:nth-child(4){
      	 width: 100%;
      	 height: 40px;
      	 margin-top: 10px;
      }
      .repair_info>div:nth-child(3) input,.repair_info>div:nth-child(4) input{
      	 width: 438px;
      	 height: 38px;
      	 border: 1px solid #e1e1e1;
      	 text-indent: 10px;
      	 font-size: 15px;
      }



      .repair_img{
      	 width: 100%;
      	 height: 150px;
      	 margin-top: 20px;
      }
      .repair_img div{
      	 width: 150px;
      	 height: 150px;
      	 margin-right: 10px;
      }
      .repair_add_img{
          display: flex;
          flex-direction: column;
          position: relative;
          border: 1px solid #e1e1e1;
      }
      .repair_add_img >span:nth-child(1){
      	 width: 100%;;
      	 height: 60px;
      	 display: flex;
      	 justify-content: center;
      	 align-items: center;
      	 margin-top: 30px;
      	 
      }
      .repair_add_img >span:nth-child(2){
      	 display: flex;
      	 justify-content: center;
      	 align-items: center;
      	 font-size: 18px;
      	 margin-top: 20px;
      }
      .repair_add_img input{
      	 position: absolute;
      	 width: 100%;
      	 height: 100%;
      	 opacity: 0;
      }


      .repair_btn{
         width: 100%;
         height: 40px;
         margin-top: 20px;
      }
      .repair_btn>span{
      	 width: 196px;
      	 height: 36px;
      	 border: 2px solid black;
      	 border-radius: 30px;
      	 display: flex;
      	 justify-content: center;
      	 align-items: center;
      	font-weight: bold;
      	font-size: 18px;
      }



</style>