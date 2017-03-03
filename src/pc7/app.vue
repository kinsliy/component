<template>
	 <div id='body1' class='fadeInLeft'>
	 	 <div class='left' >
	 	 	 <left></left>
	 	 </div>
	 	 <div class='right' >
	 	 	 <bread :item='bread_data'></bread>
        <div class='p_l'>
          <activit></activit>

          <div class='pages'>
                  <pages></pages>
               </div>
       </div>
	 	 </div>
	 </div>
</template>
<script>
  var left= require('./components/left_baner.vue');
  var bread= require('./components/bread.vue');
  var activit= require('./components/activit.vue');
   var pages = require('./components/pages.vue');

  //  var zu_lists=require('./components/zu_lists.vue');
   
module.exports={
	  data:function(){
     	 	 return {
                  bread_data:{
                  flag:true,
                  
                  position:'../../imgs/position.png',
                  title:'首页/列表页',
                  back:'../../imgs/back.png',
                  },
                  
     	 	 }
     	 },
         components:{
            left:left,
            bread:bread,
            
             activit:activit,
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
     .p_l{
         padding-left: 2.1%;
         height: auto;
         padding-right: 2.1%;
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
          .pages{
             width: 1112px;
          }
     }
     @media screen and (max-width: 1024px){
     	  #body1{
     	  	 width: 1024px;
     	  }
     }
</style>