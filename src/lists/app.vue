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
  var lists= require('../../components/lists.vue');
module.exports={
	  data:function(){
     	 	 return {

     	 	 }
     	 },
         components:{
            left:banner,
            right:lists,
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
	 	 width: 100%;
	 	 height: auto;
	 	  font-family: "Hiragino Sans GB","华文细黑","STHeiti","微软雅黑","Microsoft YaHei",SimHei,"Helvetica Neue",Helvetica,Arial,sans-serif !important;
	 	   display: flex;
	 	   justify-content: flex-start;

	 }
	 .left{
	 	 overflow-y: scroll;
	 	 height: auto;
	 	 flex-basis: 245px;
	 	 flex-grow: 0;
	 	 display: flex;
	 	 flex-direction: column;
         position: fixed;
         
         height: 100%;
	 }
     .right{
     	 margin: auto;
     	 overflow: hidden;
         width: 780px;

     }
     @media screen and (min-width: 1920px){
     	  #body1{
     	  	 width: 1920px;
             margin: 0 auto;
     	  }
     }
     @media screen and (max-width: 1024px){
     	  #body1{
     	  	 width: 1024px;
     	  }
     }
</style>