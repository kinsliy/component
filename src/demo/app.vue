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
              <div><top></top></div>
              <div><ptext></ptext></div>
              <div><zlists></zlists></div>
              <div class='slide'><slide></slide></div>
              <div><ptitle></ptitle></div>
              <div><work></work></div>

              <div><st></st></div>
              <div><loct></loct></div>
               <div><check></check></div>
              <div><record></record></div>
            <div><bar></bar></div>
            <div><title1></title1></div>
            <div><checkImg></checkImg></div>
            <div><perImg></perImg></div>
            <div><personC></personC></div>
            <div><appointment></appointment></div>
            <div><dataL></dataL></div>
            <div><dataP></dataP></div>
             <div><dataC></dataC></div>
             <div><dataA></dataA></div>
              <div><package></package></div>
              <div><product></product></div>
              <div><productT></productT></div>
              <div><repairL></repairL></div>
              <div><repairI></repairI></div>
              <div><appoint1></appoint1></div>
              <div><appoint2></appoint2></div>
              <div><aprment1></aprment1></div>
              <div><fillI></fillI></div>
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
  var text=require('../../components/text.vue');
  var top=require('../../components/top_img.vue');
  var top_text=require('../../components/top_text.vue');
  var zu_lists=require('../../components/zu_lists.vue');
  var top_title=require('../../components/top_title.vue');
  var work=require('../../components/work.vue');
  var select=require('../../components/select.vue');
  var slide=require('../../components/top_slide.vue');
  var map=require('../../components/map.vue');
  var check=require('../../components/check.vue');
  var record_lists=require('../../components/record_lists.vue');
  var bar=require('../../components/bar.vue');
  var title=require('../../components/title.vue');
  var check_img=require('../../components/check_img.vue');
  var person_img=require('../../components/person_img.vue');
  var person_content=require('../../components/person_content.vue');
  var appointment=require('../../components/appointment.vue');
  var data_left=require('../../components/data_left.vue');
  var data_person=require('../../components/data_person.vue');
  var data_change_password=require('../../components/data_change_password.vue');
  var data_person_address=require('../../components/data_person_address.vue');
  var package_lists=require('../../components/package_lists.vue');

  import product_lists from '../../components/product_lists.vue';
  import product_title from '../../components/product_title.vue';
  import repair_lists from '../../components/repair_lists.vue';
  import repair_info from '../../components/repair_info.vue';

  import appointment1 from '../../components/appointment1.vue';

  import appointment2 from '../../components/appointment2.vue';
  import aprtment_manage1 from '../../components/aprtment_manage1.vue';
  import fill_info_top from '../../components/fill_info_top.vue';
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
            top:top,
            ptext:top_text,
            zlists:zu_lists,
            ptitle:top_title,
            work:work,
            st:select,
            slide:slide,
            loct:map,
            check:check,
            record:record_lists,
            bar:bar,
            title1:title,
            checkImg:check_img,
            perImg:person_img,
            personC:person_content,
            appointment:appointment,
            dataL:data_left,
            dataP:data_person,
            dataC:data_change_password,
            dataA:data_person_address,
            package:package_lists,
            product:product_lists,
            productT:product_title,
            repairL:repair_lists,
            repairI:repair_info,
            appoint1:appointment1,
            appoint2:appointment2,
            aprment1:aprtment_manage1,
            fillI:fill_info_top,
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
       width: 100%;
       height: auto;
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