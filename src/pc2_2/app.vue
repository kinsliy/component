<template>
	 <div id='body1' class='fadeInLeft'>
	 	 <div class='left' >
	 	 	 <left></left>
	 	 </div>
	 	 <div class='right' >
	 	 	<div><topi></topi></div>
            <div class='p_l'>
            
            
             <btn></btn>
             <rent></rent>
             <pages></pages>
             <hoti></hoti>
 

            </div>
	 	 </div>
	 </div>
</template>
<script>
  var left= require('./components/left_baner.vue');
  var top_img= require('./components/top_img.vue');
  // var top_text= require('./components/top_text.vue');
  var button = require('./components/button.vue');
  var hot_info = require('./components/hot_info.vue');
  var pages=require('./components/pages.vue');
  var rent = require('./components/rent.vue');
module.exports={
	  data:function(){
     	 	 return {

     	 	 }
     	 },
         components:{
            left:left,
            topi:top_img,
            
            btn:button,
            rent:rent,
            pages:pages,
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
     .p_l{
         padding-left: 2.1%;
         height: auto;
     }
	 #body1{
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
     	  #body1{
     	  	 width: 1920px;
             margin: 0 auto;
     	  }
          .left{
             height: 100%;
          }
     }
     @media screen and (max-width: 1024px){
     	  #body1{
     	  	 width: 1024px;
     	  }
     }
</style>