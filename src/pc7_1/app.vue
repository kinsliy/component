<template>
	 <div id='body5' class='fadeInLeft'>
	 	 <div class='left' >
	 	 	 <left></left>
	 	 </div>
	 	 <div class='right' >
	 	 	    <div class='k'><topt></topt></div>
        <div class='p_j'>
             <div class='top'>
                <div class='top_left'>
                   <tope></tope>
                   <next></next>
                   <comment></comment>
                   <msg></msg>
               </div>
               <div class='top_right'>
                   <little></little>
                   <guess></guess>
               </div>

             </div>
            <div class='middle'>
                 <pages></pages>
                 <hotr></hotr>
                 <hoti></hoti>
            </div>

       </div>
	 	 </div>
	 </div>
</template>
<script>
  var left= require('./components/left_baner.vue');
  var top_title= require('./components/top_title.vue');
   var text= require('./components/text.vue');
   var little = require('./components/little_comment.vue');

    var guess=require('./components/guess.vue');
   var next=require('./components/next.vue');
   var comment=require('./components/comment.vue');
   var msg=require('./components/msg.vue');
   var pages=require('./components/pages.vue');
   var hot_room=require('./components/hot_room.vue');
   var hot_info=require('./components/hot_info.vue');
module.exports={
	  data:function(){
     	 	 return {
                  
                  
     	 	 }
     	 },
         components:{
            left:left,
            topt:top_title,
            tope:text,
            little:little,
            guess:guess,
            next:next,
            comment:comment,
            msg:msg,
            pages:pages,
            hotr:hot_room,
            hoti:hot_info,
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
     .p_j{
         padding-left: 6.7%;
         height: auto;
         padding-right: 2.1%;
     }
     .top{
       width: auto;
       height: auto;
       display: flex;
       margin-top: 30px;

     }
     .top .top_right{
       margin-left: 54px;
       display: flex;
       flex-direction: column;
     }
    
     .middle{
       width: 695px;
       height: auto;
       margin-top: 30px;
       padding-top: 10px;
       border-top: 1.5px solid #e1e1e1;
     }



     .k{
       
       width: 100%;
       height: auto;
        background-color: #f8f8f8;
     }
     .sele{
       display: flex;
       margin-top: 20px;
     }
     .pages{
       width: 760px;
       height: auto;
     }
     .between{
         width: 100%;
         height: 45px;
         margin-top: 35px;
         display: flex;
         justify-content: space-between;
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
     }
</style>