<template>
	  <div class='finish_room'>
	  	  <div class='finish_room1'>
	  	  	   <div>
	  	  	   	   <span>编号</span>
	  	  	   	   <input type="text">
	  	  	   	   <span></span>
	  	  	   </div>
	  	  	   <div>
	  	  	   	   <span>面积</span>
	  	  	   	   <input type="text">
	  	  	   	   <span class='room_line'>平方米</span>
	  	  	   </div>
	  	  </div>
  	  	 


           <div class='finish_line' v-for='item1 in items'>
      	  <div v-for='item2 in item1.items' class='finish_line1' @click='line1(item2)'>
      	  	  <span>{{item2.title}}</span>
      	  	  <span>{{item2.content}}</span>
      	  	  <span><img :src="item2.img"></span>

      	  	  <div v-if='item2.flag'>
      	  	  	  <div @click='close1(item2,item3,$event)' v-for='item3 in item2.items'>
      	  	  	  	  {{item3}}
      	  	  	  </div>
      	  	  </div>
      	  </div>
      	  
       </div>
        

       <div class='finish_room2'>
       	   <div v-for='(item ,index ) in imgs' class='room_img'>
       	   	  <img :src="item">
       	   	  <span @click='delete_img(index)'><img src="../imgs/delete.png"></span>
       	   </div>

           
           <div class='room_add_img'>
           	    <span><img src="../imgs/add_img.png"></span>
           	    <span>上传图片</span>
           	    <input @change='add_img'  type="file">
           </div>

       </div>


      <div class='room_btn'>
      	 <div>
      	 	添加房间
      	 </div>
      	 <div>
      	 	 跳过，提交审核
      	 </div>
      </div>
         
	  </div>

</template>


<script>
	export default{
		 data(){
		 	  return{
                 items:[
                   
                    {items:[
                         {title:'朝向',content:'',img:'../../imgs/arrow_down.png',items:['朝向1','朝向2','朝向3'],flag:false,},
                         {title:'房间类型',content:'',img:'../../imgs/arrow_down.png',items:['房间类型1','房间类型2','房间类型3'],flag:false,}
                    ]},

                  ],

                  imgs:[],


		 	  }
		 },
		 methods:{
		 	   line1(item1){
		 	  	  item1.flag=true;
		 	  },
		 	  close1(item1,item2,event){
                 item1.content=item2;
                 item1.flag=false;
                 event.stopPropagation();
		 	  },
		 	  delete_img(item){
               this.imgs.splice(item,1);
		 	  },
		 	  add_img(event){
		 	  	  var reader =new FileReader();
		 	  	   var img1=event.target.files[0];
                  
                   reader.readAsDataURL(img1);
                   var that=this;
                   reader.onloadend=function(){
                   	   that.imgs.push(reader.result)
                   }
                  
		 	  }
		 }

	}



</script>


<style scoped>
	.finish_room{
		  width: 430px;
		  height: auto;
	}
    
    .finish_room1{
         width: 100%;
         height: 50px;
         display: flex;
         border-top: 2px solid #e1e1e1;
         border-bottom: 2px solid #e1e1e1;
     }

    .finish_room1>div{
          display:flex;
     	 width: 48%;
     	 height: 50px;
     	 
     	 justify-content: space-between;
     	 align-items: center;
      }
      .finish_room1>div:nth-child(2){
      	   margin-left: 4%;
      }
      .finish_room1>div span{
      	  width: 35px;
       	 height: 50px;
       	 display: flex;
       	 align-items: center;
       	 flex-grow: 0;
       	 flex-shrink: 0;
      }
       .finish_room1>div:nth-child(2) .room_line{
       	   width: 55px;
       }
      
      .finish_room1>div input{
      	   display: flex;
      	 
      	 flex-grow: 0;
      	 height: 48px;
         width: 110px;
      	 outline: none;
      	 border: none;
      }
      


      .finish_line{
      	 width: 100%;
         height: 50px;
         display: flex;
         
         border-bottom: 2px solid #e1e1e1;
      }

      .finish_line1{
      	 display: flex;
     	 width: 48%;
     	 height: 50px;
     	 justify-content: space-between;
     	 align-items: center;
     	 position: relative;
      }
      .finish_line1:nth-child(2){
      	  margin-left: 4%;
      }
     .finish_line1 >div{
          position: absolute;
      	 width: 100%;
      	 height: auto;
      	 top: 52px;
      	 left: 0;
      	 background-color: rgba(255,255,255,1);
      	 z-index: 9999;
     }

    .finish_line1 >div>div{
    	   display: flex;
     	  justify-content: flex-start;
     	  align-items: center;
     	  width: 100%;
     	  height: 50px;
     	  border-bottom: 1px solid #e1e1e1;
    }
    .finish_line1 >div>div:hover{
    	  background-color: #f8f8f8;
    }


   .finish_room2{
   	 width: 100%;
   	 height: auto;
   	 padding-top: 15px;
   	 padding-bottom: 15px;
   	 display: flex;
   	 align-items: center;
   	  border-bottom: 2px solid #e1e1e1;
   }
    
   .finish_room2 .room_img{
   	 width: 150px;
   	 height: 100px;
   	 margin-right: 10px;
   	 position: relative;
   	 overflow: hidden;
   }
   .finish_room2 .room_img img{
   	 
   	 width: 100%;
   	 height: 100%;
   }
   .finish_room2>.room_img span{
   	  position: absolute;
   	  width: auto;
   	  height: auto;
   	  right: 5px;
   	  bottom:3px;
   }
 


   .room_add_img{
   	 width: 148px;
   	 height: 98px;
   	 border:1px solid #e1e1e1;
   	 display: flex;
   	 flex-direction: column;
   	 align-items: center;
   	 justify-content: space-between;
   	 position: relative;
   }
   .room_add_img >span:nth-child(1){
   	 margin-top: 20px;
   	 width: 40px;
   	 height: 40px;
   	 overflow: hidden;
   }
   .room_add_img >span:nth-child(2){
   	  margin-bottom: 10px;
   }

  .room_add_img input{
  	  position: absolute;
  	  width: 100%;
  	  height: 100%;
  	  z-index: 99999;
  	  opacity: 0;
  	  top: 0px;
  	  left: 0px;
  }

  
  .room_btn{
  	  display: flex;
  }
  .room_btn>div{
  	  width: 140px;
  	  height: 30px;
  	  border-radius: 30px;
  	  border: 2px solid black;
  	  display: flex;
  	  justify-content: center;
  	  align-items: center;
  	  margin-top: 30px;
  }
  .room_btn>div:nth-child(1){
  	  margin-right: 33px;
  	  color: grey;
  	  border-color: grey;
  }




</style>