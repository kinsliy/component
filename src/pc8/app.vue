<template>
	 <div id='body5' class='fadeInLeft'>
	 	 <div class='left' >
	 	 	 <left></left>
	 	 </div>
	 	 <div class='right' >
	 	 	   <div class='person_top'>
             <perI></perI>
         </div>

         <div class='person_middle'>
            
               <span>我是租客</span>
               <span class='person_index'>我是房东</span>
            
         </div>


         <div class='person_bottom'>
             <perC></perC>
         </div>


	 	 </div>
	 </div>
</template>
<script>
  var left= require('./components/left_baner.vue');
  import person_img from './components/person_img.vue';

  import person_content from './components/person_content.vue';
module.exports={
	  data:function(){
     	 	 return {
                  
                  
     	 	 }
     	 },
         components:{
            left:left,
            perI:person_img,
            perC:person_content,
            
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

     }
     .person_index{
        background-color: black;
        color: white;
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