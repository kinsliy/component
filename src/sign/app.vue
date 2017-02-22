<template>
	 <div id='body1' class='fadeInRight'>
	 	 <div class='left' >
	 	 	 <left></left>
	 	 </div>
	 	 <div class='right' >
	 	 	 <right></right> 
	 	 </div>
	 </div>
</template>
<script>
  var img= require('../../components/img.vue');
 // var info= require('../../components/info.vue');
  var login = require('../../components/sign.vue');
module.exports={
	  data:function(){
     	 	 return {

     	 	 }
     	 },
         components:{
            left:img,
            right:login,
         }

}
     	 
    

</script>

<style scoped>
     *{
     	 margin: 0;
     	 padding: 0;
     }
     .fadeInRight{
     	 animation-duration: 2s;
     }
     
	 #body1{
         position: fixed;
	 	 width: 100%;
	 	 height: 100%;
	 	  font-family: "Hiragino Sans GB","华文细黑","STHeiti","微软雅黑","Microsoft YaHei",SimHei,"Helvetica Neue",Helvetica,Arial,sans-serif !important;
	 	   display: flex;
	 	   justify-content: flex-start;

	 }
	 .right{
	 	 
	 	 height: 100%;
	 	 flex-basis: 350px;
	 	 flex-grow: 0;
	 	 display: flex;
	 	 flex-direction: column;
	 }
     .left{
     	 flex-grow: 1;
     	 overflow: hidden;

     }
     @media screen and (min-width: 1920px){
     	  #body{
     	  	 width: 1920px;
             margin: 0 auto;
     	  }
     }
     @media screen and (max-width: 1024px){
     	  #body{
     	  	 width: 1024px;
     	  }
     }
</style>