<template>
	 <div id='body1' class='fadeInLeft'>
	 	 <div class='left' >
	 	 	 <left></left>
	 	 </div>
	 	 <div class='right' >
	 	 	<div><right></right></div>
      <div><room></room></div>
            <div><page></page></div>
            <div><rent></rent></div>
             <div class='bread'><bread  :item='item'></bread></div>
             <div><activit></activit></div>
             <div><btn></btn></div>
             <div><search></search></div>
             <div><ser></ser></div>
             <div><comment></comment></div>
             <div><msg></msg></div>
             <div><guess></guess></div>
             <div><little></little></div>
             <div><next></next></div>
              <div><rong></rong></div>
	 	 </div>
	 </div>
</template>
<script>
  var banner= require('../../components/left_baner.vue');
  var loop= require('../../components/hot_info.vue');
  var pages=require('../../components/pages.vue');
  var rent=require('../../components/rent.vue');
  var bread=require('../../components/bread.vue');
  var room =require('../../components/hot_room.vue');
  var activit =require('../../components/activit.vue');
  var button =require('../../components/button.vue');
  var search =require('../../components/search.vue');
  var ser_imgs =require('../../components/ser_imgs.vue');
  var comment =require('../../components/comment.vue');
  var msg =require('../../components/msg.vue');
  var guess =require('../../components/guess.vue');
  var little=require('../../components/little_comment.vue');
  var next=require('../../components/next.vue');
  var text=require('../../components/text.vue')
module.exports={
	  data:function(){
     	 	 return {
              item:{
                  flag:true,
                  flag1:true,
                  position:'../../imgs/position.png',
                  title:'首页/上海公寓租房/静安区',
                  back:'../../imgs/back.png',
              }
     	 	 }
     	 },
         components:{
            left:banner,
            right:loop,
            page:pages,
            rent:rent,
            bread:bread,
            room:room,
            activit:activit,
            btn:button,
            search:search,
            ser:ser_imgs,
            comment:comment,
            msg:msg,
            guess:guess,
            little:little,
            next:next,
            rong:text,
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
     .bread{
       background-color: #f8f8f8
     }
	 #body1{
         
	 	 width: 100%;
	 	 height: auto;
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
     position: fixed;
     top: 0;
     left: 0;
     z-index: 9999;
	 }
     .right{
     	 flex-grow: 1;
     	 overflow: hidden;
       margin-left: 245px;
       
     }
     .right >div{
       margin-bottom: 35px;
     }

     .right >div:nth-child(1){
          width: 100%;
          height: 300px;
     }
     .right >div:nth-child(2){
       width: 100%;
       height:auto;
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