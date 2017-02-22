<template>
	 <div id='body1' class='fadeInLeft'>
	 	 <div class='left' >
	 	 	 <left></left>
	 	 </div>
	 	 <div class='right' >
	 	 	<right></right>
	 	 </div>
	 </div>
</template>
<script>
  var banner= require('../../components/left_baner.vue');
  var loop= require('../../components/loop_img.vue');
module.exports={
	  data:function(){
     	 	 return {

     	 	 }
     	 },
         components:{
            left:banner,
            right:loop,
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
     
	 #body1{
         position: fixed;
	 	 width: 100%;
	 	 height: 100%;
	 	  font-family: "Hiragino Sans GB","华文细黑","STHeiti","微软雅黑","Microsoft YaHei",SimHei,"Helvetica Neue",Helvetica,Arial,sans-serif !important;
	 	   display: flex;
	 	   justify-content: flex-start;
           min-height: 600px;

	 }
	 .left{
	 	 
	 	 height: auto;
	 	 flex-basis: 245px;
	 	 flex-grow: 0;
	 	 display: flex;
	 	 flex-direction: column;
        
	 }
     .right{
     	 flex-grow: 1;
     	 overflow: hidden;
         height: 100%;
         

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
             overflow-y: hidden;
             overflow-x: scroll;
             
     	  }
     }
</style>