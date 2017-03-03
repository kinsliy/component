<template>
	 <div id='body5' class='fadeInLeft'>
	 	 <div class='left' >
	 	 	 <left></left>
	 	 </div>
	 	 <div class='right' >
	 	 	   <div class='person_top'>
             <bread  :item='bread_data'></bread>
         </div>

         <div class='person_middle'>
            
               <span>待看房</span>
               <span class='person_index'>已看房</span>
               <span >已租住</span>
               <span >已取消</span>
            
         </div>


         <div class='person_bottom'>
             <appo></appo>
         </div>
   
     
         <div class='person_bottom1'>
             <pages></pages>
         </div>


	 	 </div>
	 </div>
</template>
<script>
  var left= require('./components/left_baner.vue');
  import bread from './components/bread.vue';

  import appointment from './components/appointment1.vue';

  import pages from './components/pages.vue';
module.exports={
	  data:function(){
     	 	 return {
                   bread_data:{
                   flag:true,
                   position:'../../imgs/position.png',
                   title:'首页/个人中心',
                   back:'../../imgs/back.png',
                } 
                  
     	 	 }
     	 },
         components:{
            left:left,
            bread:bread,
            appo:appointment,
            pages:pages,
            
         }

}
     	 
    

</script>

<style scoped>
     *{
     	 margin: 0;
     	 padding: 0;
     }
     .fadeInLeft{
     	 animation-duration: 2s;
     }
    

     .person_top{
       width: 100%;
       height: 70px;
       background-color: #f8f8f8;
       display: flex;
      align-items: center;
     }

     .person_middle{
       width: 100%;
       height: 50px;
       display: flex;
       border:1px solid black;
     }
     .person_middle span{
       flex-grow: 1;
       display: flex;
       justify-content: center;
       align-items: center;
       border-right: 1px solid black;

     }
     .person_index{
        background-color: black;
        color: white;
     }

    .person_bottom{
       padding-left: 2.1%;
       margin-top: 10px;
    }

    .person_bottom1{
       padding-left: 2.1%;
       width: 760px;
       margin-top: 10px;
       display: flex;
       justify-content: center;
       padding-bottom: 40px;
    }


	 #body5{
	 	 width: 100%;
	 	 height: auto;
	 	  font-family: "Hiragino Sans GB","华文细黑","STHeiti","微软雅黑","Microsoft YaHei",SimHei,"Helvetica Neue",Helvetica,Arial,sans-serif !important;
	 	   display: flex;
	 	   justify-content: flex-start;
           

	 }
	 .left{
	 	 
	 	 flex-basis: 245px;
	 	 flex-grow: 0;
	 	 display: flex;
	 	 flex-direction: column;
         position: fixed;
         top: 0;
         left: 0;
         z-index: 99999;
         
	 }
     .right{
     	 
     	 
         flex-grow: 1;
         height: auto;
         
         margin-left: 244px;

     }
     @media screen and (min-width: 1920px){
     	  #body5{
     	  	 width: 1920px;
             
     	  }
          
     }
     @media screen and (max-width: 1024px){
     	  #body5{
     	  	 width: 1024px;
     	  }
     }
     @media screen and (min-width: 1500px){
         .top{
             width: 232.5px;
          }
          .middle{
             width: 1112px;
          }
          .like .top{
             height: 165px;
          }
          ..person_bottom1{
             width: 1112px;
          }
     }
</style>