<template>
	<div class='data_change_password'>
		
         <div class='data_person_2' v-for='item in items'>
      	   <div>
      	   	  {{item.title}}
      	   </div>
      	   <div>
      	   	 <input type="text" v-bind:placeholder="item.place" >
      	   </div>


       </div>


      <div class='data_person_btn'>
      	   更新密码
      </div>




	</div>



</template>


<script >
	module.exports={
		  data:function(){
             return{
                 items:[
                 {title:'旧密码',place:'请输入原始密码',},
                 {title:'新密码',place:'最少使用8个字符',},
                 {title:'确认密码',place:'最少使用8个字符',},


                 ]

             }
		  },
	}



</script>


<style scoped>
	  .data_change_password{
	  	  width: 465px;
	  	  height: auto;
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
     	 height: 29px;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     	 border: 2px solid #a6a6a6;
     	 border-radius: 30px;
     	 color: #a6a6a6;
     	 font-size: 18px;
     	 font-weight: bold;
     	 margin-left: 90px;
     	 margin-top: 35px;

     }
     .data_person_btn:hover{
     	  color: black;
     	  border: 2px solid black;
     }

</style>