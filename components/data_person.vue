<template>
	
  <div id='data_person'>
  	  <div class='data_person_1'>
  	  	  <div>
  	  	  	  <span>头像</span>
  	  	  	  
  	  	  </div>
  	  	  <div>
  	  	  	 <div><img src="../imgs/data_face.png"></div>
             <div>
             	 <div><input type="file" accept="image/png, image/jpeg"><span>本地上传</span></div>
             	 <div>仅支持JPG,PNG格式,文件小于3M</div>
             </div>
  	  	  </div>
  	  </div>

      
      <div class='data_person_2' v-for='item in items'>
      	   <div>
      	   	  {{item.title}}
      	   </div>
      	   <div>
      	   	 <input type="text" v-bind:placeholder="item.place" >
      	   </div>


       </div>


      <div class='data_person_btn'>
      	   保存
      </div>


  </div>


</template>

<script>
	module.exports={
		  data:function(){
		  	 return{
                 items:[
                   {title:'手机号码',place:'请填写手机号码'},
                   {title:'用户名',place:'6-30个字符字母数字'},
                   {title:'品牌名称',place:'请填写品牌名称,例如:蘑菇公寓'},
                   {title:'姓名',place:'请填写中文姓名'},
                   {title:'性别',place:'请填写性别'},

                 ],


		  	 }
		  },
	}



</script>


<style scoped>
	#data_person{
		  width: 465px;
		  height: auto;
		  display: flex;
		  flex-direction: column;
	}
     


    .data_person_1{
    	  width: 100%;
    	  height: auto;
    	  display: flex;
    }
    .data_person_1>div:nth-child(1){
    	  width: 65px;
    	  height: 70px;
    	  /*color: #909090;*/
    }
    .data_person_1>div:nth-child(1) >span{
    	 display: flex;
    	 margin-top: 8px;
    }
    .data_person_1>div:nth-child(2){
         width: auto;
    	 height: 70px;
    	 display: flex;
    	 margin-left: 15px;
    }
    .data_person_1>div:nth-child(2) >div:nth-child(2){
    	  margin-left: 10px;
    }
    .data_person_1>div:nth-child(2) >div:nth-child(2)>div:nth-child(1){
    	 width: 100px;
    	 height: 34px;
    	 position: relative;
    	 margin-bottom: 10px;

    }
     .data_person_1>div:nth-child(2) >div:nth-child(2)>div:nth-child(1) input{
     	 position: absolute;
     	 width: 100%;
     	 height: 100%;
     	 opacity: 0;
     	 z-index: 99999;
     }
     .data_person_1>div:nth-child(2) >div:nth-child(2)>div:nth-child(1) span{
     	 position: absolute;
     	 width: 100%;
     	 height: 100%;
     	 border-radius: 30px;
     	 border: 2px solid #909090;
     	 font-size: 18px;
     	 color: #909090;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     }
     .data_person_1>div:nth-child(2) >div:nth-child(2)>div:nth-child(2){
     	  color: #909090;
     }




     .data_person_2{
     	 width: 100%;
     	 height: 40px;
     	 display: flex;
     	 margin-top: 10px;
     }
     .data_person_2>div:nth-child(1){
     	  width: 65px;
     	  height: 40px;
     	  display: flex;
     	  align-items: center;
     }
     .data_person_2>div:nth-child(2){
     	  width: 380px;
     	  height: 40px;
     	  margin-left: 15px;
     }
     .data_person_2>div:nth-child(2) input{
        width: 100%;
        height: 100%;
        border: 1px solid #e1e1e1;
        text-indent: 10px;
        color: #333333;
        font-size: 16px;
     }  


     .data_person_btn{
     	 width: 96px;
     	 height: 28px;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     	 border: 2px solid black;
     	 border-radius: 30px;
     	 color: black;
     	 font-size: 18px;
     	 font-weight: bold;
     	 margin-left: 90px;
     	 margin-top: 35px;

     }





</style>