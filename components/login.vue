<template>
	  <div id='infos'>
         
	  	  <div class='face'>
	  	           <div id='error'>
                    <img src="../imgs/grey_close.png" @mouseover='move' @mouseout='leave'>
                  </div>
	  	  	   <div class='left'>
	  	  	       
	  	  	   	   <span ><img src="../imgs/me.png"></span>
	  	  	   	   <span class='p_l'>sundaybreak</span>
	  	  	   </div>
	  	  	   <div class='right'>
	  	  	   	  <span><img src="../imgs/news01.png"></span>
	  	  	   </div>
	  	  </div>
         
	  	   <div id='back'>
             <div>
             <span><img src="../imgs/back.png">返回</span>
             </div>
         </div>

          <div  id='reminds'>
          	   <div v-for='item in items'>
          	   	   <span></span>
          	   	   <div>
          	   	   	    <span><img src='../imgs/time.jpg'><span>{{item.time}}</span></span>
          	   	   	    <div>{{item.content}}<span v-bind:class='{ye:item.flag}'@mouseover='over(item)' @mouseout='out(item)'>查看></span>
          	   	    </div>
          	   	   </div>
          	   </div>
          </div>




	  </div>

</template>

<script >
	 module.exports={
	 	 data:function(){
	 	 	  return {
	 	 	  	  
                  items:[
                     {flag:false,time:'2016.02.18',content:'您在[沪上最美餐厅前10名]的留言被点赞。'},
                     {flag:false,time:'2016.02.19',content:'您在[沪上最美餐厅前10名]的留言被点赞。'},
                     {flag:false,time:'2016.02.20',content:'您在[沪上最美餐厅前10名]的留言被点赞。'},
                     {flag:false,time:'2016.02.18',content:'您在[沪上最美餐厅前10名]的留言被点赞。'},
                     {flag:false,time:'2016.02.19',content:'您在[沪上最美餐厅前10名]的留言被点赞。'},
                     {flag:false,time:'2016.02.20',content:'您在[沪上最美餐厅前10名]的留言被点赞。'},
                     {flag:false,time:'2016.02.18',content:'您在[沪上最美餐厅前10名]的留言被点赞。'},
                     {flag:false,time:'2016.02.19',content:'您在[沪上最美餐厅前10名]的留言被点赞。'},
                     {flag:false,time:'2016.02.20',content:'您在[沪上最美餐厅前10名]的留言被点赞。'},
                  ],
	 	 	  }
	 	 },
	 	 methods:{
	 	 	  move:function(e){
                 e.target.src='../../imgs/yellow_close.png'
	 	 	  },
	 	 	  leave:function(e){
                 e.target.src='../../imgs/grey_close.png'
	 	 	  },
	 	 	  over:function(item){
	 	 	  	  item.flag=true;
	 	 	  },
	 	 	  out:function(item){
	 	 	  	 item.flag=false;
	 	 	  }
	 	 }
	 }

</script>

<style scoped>
     .ye{ 
     	color: yellow;
        opacity: 0.7;
      }
	 #infos{
	 	  width: 350px;
	 	  height:100%;
      display: flex;
      flex-direction: column;
      
      
	 }
     .face{
       flex-grow: 0;
       
       padding-bottom: 25px;
       padding-left: 0;
       padding-right: 0;
       padding-top: 20px;
     }
     .face,.face1{
     	  width: 100%;
     	  height: 60px;
     	  display: flex;
     	  justify-content: space-between;
     	  align-items: center;
     	  position: relative;
     }

     .face div{
     	 width: auto;
     	 height: 60px;

     }
     .btm{
     	 border-bottom: 0.1px solid #CDC9C9;
     }
     .face span{
     	 width: auto;
     	 height: 60px;
     	 display: flex;
     	 align-items: center;
     	 font-size: 16px;
     }
     .face .left{
     	 margin-left: 25px;
     	 display: flex;
     	 align-items: center;
     	 width: 295px;
     	/* margin-right: -22px;*/
     }
     .left.person {
     	 border-radius: 30px;
     	 height: 35px;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     	 font-size: 18px;
     	 border: 2px solid #CDC9C9;
     	 color: gray;
     }
     .face .right{
     	 margin-right: 25px;
     }
     .p_l{
     	 padding-left: 10px;
     }
     .p_l1{
     	  margin-left: 20px;
     }
     
     #error{
     	 position: absolute;
     	 left: -50px;
     	 top: 10px;
       
     }

     
     #reminds { 
       
       flex-grow: 1;
       flex-direction: column;
     	 margin-top: 20px;
         width: 350px;
         height:auto;
         margin-bottom: 20px;
         overflow-y: scroll;
       }

       #reminds >div{
       	 display: flex;
       	 justify-content: flex-start;
       	 width: 100%;
       	 height:90px;
       	
       }

       #reminds >div >span{
       	 flex-basis: 25px;
       	 flex-grow: 0;
       	 height: 60px;
       }
       #reminds >div >div{
       	   flex-grow: 1;
       	   height: 60px;
       	   flex-direction: column;
       	   justify-content: flex-start;
       	   font-size: 12px;
       	   color: gray;
       	   padding-bottom: 10px;
       	    border-bottom: 1px solid #CDC9C9;
       }
       #reminds >div >div >span img{
       	 position: relative;
       	 top: 5px;
       }
       #reminds >div >div >span >span{
       	  padding-left: 10px;
       }
       #reminds >div >div >div{
       	  text-indent: 15px;
       	  font-size: 16px;
       	  color: black;
       }
       #reminds >div >div >div >span{
       	 color: #CD8500;

       }


      #back{
          width: 100%;
          height: 40px;
          display: flex;
          
          flex-grow: 0;
          margin-bottom: 10px;
          
      }
      #back >div{
         flex-grow: 1;
         margin-left: 25px;
         margin-right: 20px;
         display: flex;
         height:40px;
         align-items: center;
         justify-content: flex-end;
      }
      #back >div img{
         position: relative;
         top: 7px;
         left: -5px;
      }
</style>