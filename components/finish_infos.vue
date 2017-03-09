<template>
  <div class='finish_infos'>
  	  <div>
  	  	 <div @click='change(item)'>
  	  	 	 <span>户型</span>
  	  	 	 <span>{{item.title}}</span>
  	  	 	 <span ><img v-bind:src="item.img"></span>

  	  	 	 <div class='tip1' v-if='item.flag' >
  	  	 	 	 <div @click='pick(item,"户型1",$event)'>户型1</div>
  	  	 	 	 <div @click='pick(item,"户型2",$event)'>户型2</div>
  	  	 	 	 <div @click='pick(item,"户型3",$event)'>户型3</div>
  	  	 	 </div>
  	  	 </div>
  	  	 <div>
  	  	 	 <span >面积</span>
  	  	 	 <input type="text" >
  	  	 	 <span class='span2'>平方米</span>
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


      <div class='finish_btn'>
      	下一步
      </div>

     


  </div>

</template>

<script>
	export default{
		 data(){
		 	 return{
                 item:{
                 	 img:'../../imgs/arrow_down.png',
                 	 title:'',
                 	 flag:false,
                 },

                 items:[
                    {items:[
                         {title:'房型',content:'',img:'../../imgs/arrow_down.png',items:['房型1','房型2','房型3'],flag:false,},
                         {title:'用途',content:'',img:'../../imgs/arrow_down.png',items:['用途1','用途2','用途3'],flag:false,}
                    	]},
                    {items:[
                         {title:'朝向',content:'',img:'../../imgs/arrow_down.png',items:['朝向1','朝向2','朝向3'],flag:false,},
                         {title:'租住类型',content:'',img:'../../imgs/arrow_down.png',items:['租住类型1','租住类型2','租住类型3'],flag:false,}
                    ]},

                  ]


		 	 }
		 },
		 methods:{
		 	  change(item){
		 	  	  item.flag=true;
		 	  },
		 	  pick:function(item,title,event){
                 
                 item.title=title;
                  item.flag=false; 
                  event.stopPropagation();
		 	  },
		 	  line1(item1){
		 	  	  item1.flag=true;
		 	  },
		 	  close1(item1,item2,event){
                 item1.content=item2;
                 item1.flag=false;
                 event.stopPropagation();
		 	  }
		 	  
		 	  
		 }
	}



</script>


<style scoped>
	.finish_infos{
		 width: 430px;
		 height: auto;
		 padding-bottom: 60px;
	}
    

     .finish_infos>div:nth-child(1){
         width: 100%;
         height: 50px;
         display: flex;
         border-top: 2px solid #e1e1e1;
         border-bottom: 2px solid #e1e1e1;
     }
     .finish_infos>div:nth-child(1)>div:nth-child(1){
     	 display: flex;
     	 width: 48%;
     	 height: 50px;
     	 justify-content: space-between;
     	 align-items: center;
     	 position: relative;
     }
      .finish_infos>div:nth-child(1)>div:nth-child(1) .tip1{
      	 position: absolute;
      	 width: 100%;
      	 height: auto;
      	 top: 52px;
      	 left: 0;

      }
     .finish_infos>div:nth-child(1)>div:nth-child(1) .tip1 >div{
     	  display: flex;
     	  justify-content: flex-start;
     	  align-items: center;
     	  width: 100%;
     	  height: 50px;
     	  border-bottom: 1px solid #e1e1e1;

     }
     .finish_infos>div:nth-child(1)>div:nth-child(1) .tip1 >div:hover{
     	  background-color: #f8f8f8;
     }
      .finish_infos>div:nth-child(1)>div:nth-child(2){
          display:flex;
     	 width: 48%;
     	 height: 50px;
     	 margin-left: 4%;
     	 justify-content: space-between;
     	 align-items: center;
      }

       .finish_infos>div:nth-child(1)>div:nth-child(2)>span{
       	 width: 35px;
       	 height: 50px;
       	 display: flex;
       	 align-items: center;
       	 flex-grow: 0;
       	 flex-shrink: 0;
       }
       .finish_infos>div:nth-child(1)>div:nth-child(2)>.span2{
       	  
       	  width: 50px;
       	 
       }
      .finish_infos>div:nth-child(1)>div:nth-child(2) >input{
      	 display: flex;
      	 flex-shrink: auto;
      	 flex-grow: 0;
      	 height: 48px;
      	 width: 120px;
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



   .finish_btn{
   	   width: 205px;
   	   height: 35px;
   	   border: 2px solid black;
   	   border-radius: 30px;
   	   display: flex;
   	   font-size: 20px;
   	   justify-content: center;
   	   align-items: center;
   	   font-weight: bold;
   	   margin-top: 36px;
   }



</style>