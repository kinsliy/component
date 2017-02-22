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
  var lists= require('../../components/info_lists.vue');
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
         position: fixed;
         width: 100%;
         height: 100%;
          font-family: "Hiragino Sans GB","华文细黑","STHeiti","微软雅黑","Microsoft YaHei",SimHei,"Helvetica Neue",Helvetica,Arial,sans-serif !important;
           display: flex;
           justify-content: flex-start;

     }
     .left{
         
         height: 100%;
         flex-basis: 245px;
         flex-grow: 0;
         display: flex;
         flex-direction: column;
         position: fixed;
         top: 0;
         left: 0;
         overflow-y: auto;
     }
     .right{
         
         flex-grow: 1;
         overflow: hidden;
         margin-left: 245px;

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