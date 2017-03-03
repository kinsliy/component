<template>
	<div class='data_person_adress'>
		 <div class='data_address_1'>
		 	 <div class='data_address_11'>
		 	 	 默认地址
		 	 </div>


             <div class='data_address_12' @click='change(item)' v-for='item in items'>
             	 <span>{{item.title}}</span>
             	 <span><img src="../imgs/arrow_down.png"></span>
                 <div class='data_address_pick'>
                 	 <div  v-for='item1 in item.picks'>{{item1}}</div>
                 </div>
             </div>


             <!-- <div class='data_address_12'>
             	 <span>选择城市</span>
             	 <span><img src="../imgs/arrow_down.png"></span>
             </div> -->
     
             <div class='data_address_13'>
             	 <span><img src="../imgs/person_plus.png"></span>
             </div>

		 </div>
  
        
        <div class='data_address_2'>
        	 <div class='data_address_21'>
        	 	
        	 </div>

             <div class='data_address_22'>
             	  <input type="text" placeholder="请填写详细信息">
             </div>

        </div>

       
        <div class='data_address_3'>
        	 <div class='data_address_31'>
        	 	 收货人
        	 </div>
        	 <div class='data_address_32'>
        	 	<input type="text" placeholder="请填写收货人">
        	 </div>
        </div>

        <div class='data_address_3'>
        	 <div class='data_address_31'>
        	 	 联系电话
        	 </div>
        	 <div class='data_address_32'>
        	 	<input type="text" placeholder="请填写联系电话">
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
                     {title:'选择省份',picks:['上海','广州','北京'],flag:true,},
                     {title:'选择城市',picks:['上海','广州','北京'],flag:true,},

                  ],



		  	  }
		  },
		  methods:{
		  	 change:function(item){
                item.flag=false;
		  	 },
             
             select:function(item,item1){
                 
                 item.title=item1;
                 item.flag=true;
                 console.log(item);
                 item.flag=true;
             },
             select1:function(item){
               
             }

		  },

	}



</script>


<style scoped>
	.data_person_address{
		  width: 560px;
		  height: auto;
		   color: #bbbbbb;
	}
    



    .data_address_1,.data_address_2,.data_address_3{
    	 width: 100%;
    	 height: 40px;
    	 display: flex;
    }
    .data_address_11,.data_address_21,.data_address_31{
    	 width: 70px;
    	 height: 100%;
    	 display: flex;
    	 align-items: center;
    }
    .data_address_12{
    	 width: 213px;
    	 height: 38px;
    	 border: 1px solid #e8e8e8;
    	 display: flex;
    	 justify-content: space-between;
    	 margin-left: 10px;
    	 position: relative;
    }
    .data_address_pick{
    	 position: absolute;
    	 top: 38px;
    	 left: 0px;
    	 width: 100%;
    	 height: auto;
    	 border: 1px solid #e8e8e8;
    	 background-color: white;
    }
    .data_address_pick>div{
    	 width: 100%;
    	 height: 38px;
    	 border-bottom: 1px solid #e8e8e8;
    	 padding-left: 10px;
    	 display: flex;
    	 align-items: center;
    }
    .data_address_pick>div:hover{
    	 background-color: #f8f8f8;
    }
     .data_address_index{
     	 display: none;
     }




    .data_address_12>span:nth-child(1){
      padding-left: 10px;
      height: 100%;
      display: flex;
      align-items: center;

    }
    .data_address_12>span:nth-child(2){
    	 padding-right: 10px;
    	 height: 100%;
    	 display: flex;
    	 align-items: center;
    }
   .data_address_13{
   	 width: 26px;
   	 height: 40px;
   	 margin-left: 10px;
   	 display: flex;
   	 align-items: center;

    }
      .data_address_13>span{
      	 width: 26px;
      	 height: 26px;
      }
     .data_address_13 >img{
       width: 100%;
       height: 100%;
     }

      


    .data_address_2{
    	 margin-top: 10px;
    }
     .data_address_22{
     	 width: 437px;
     	 height: 37px;
     	 
     	 margin-left: 10px;
     }
     .data_address_22 input{
     	 width: 100%;
     	 height: 100%;
     	 text-indent: 10px;
     	 border: 1px solid #e8e8e8;
     	 font-size: 16px;


     }

     
     .data_address_3{
     	 margin-top: 10px;
     }
     .data_address_32{
     	 width: 213px;
     	 height: 38px;
     	 
     	 margin-left: 10px;


     }
      .data_address_32 input{
      	 width: 100%;
      	 height: 100%;
      	 border: 1px solid #e8e8e8;
      	font-size: 16px;
      	text-indent: 10px;

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