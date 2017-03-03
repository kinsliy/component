<template>
	 <div id='body2' >
	 	   <div class='banner1'>	     
		 	   	     <div class='inner'>
		 	   	     	<div class='left1'>
		 	   	     	 <p class='space'></p>
		 	   	     	 <img src="../../../imgs/location.png">
		 	   	      	 <span class='p_l'>上海</span>
		 	   	      </div>
		 	   	      <div class='right1'>
		 	   	          <span>登录/注册</span>
		 	   	          <span class='space'></span>
		 	   	       </div>
		 	   	     </div>

		 	   	  <div id='logo' v-on:mouseover='move1' @mouseout='leave1'>
           	         <img v-bind:class='{zoomIn:flag1}'src="../../../imgs/logo.png" >
                 </div>

                 <div id='lists'>
                 	  <p v-on:mouseover='move(item)'  v-for='item in items' @mouseout='leave(item)'><span class='pad' v-bind:class='{border:item.flag}'></span>
                 	  <span class='title' v-bind:class='{moveright:item.flag}'>{{item.title}}</span></p>
                 	  <!-- <p v-on:mouseover='move(event)'><span class='pad'></span>
                 	  <span class='title'>YO指南</span></p>
                 	  <p v-on:mouseover='move(event)'><span class='pad'></span>
                 	  <span class='title'>租家</span></p>
                 	  <p><span class='pad'></span>
                 	  <span class='title'>租生活</span></p>
                 	  <p><span class='pad'></span>
                 	  <span class='title'>精选活动</span></p>
                 	  <p><span class='pad'></span>
                 	  <span class='title'>品牌动态</span></p> -->
                 	  <p class='p_t'><span class='pad'></span>
                 	  <span class='title'><img src="../../../imgs/cart.png"><span>心愿清单</span><span class='circle'>12</span></span></p>
                 	  <p class='search'><span></span><input type="text" placeholder="搜索你感兴趣的" v-on:focus='search' v-on:blur='search1'></p>
                 </div>
               


	 	   </div>

             <div id='link'>
             	  <div>
             	  	  <span class='pad'></span>
             	  	  <p>联系我们</p>
             	  </div>
             	  <div class='n_margin'>
             	  	 <span class='pad'></span>
             	  	 <p class='little'>租房热线:(8:00AM-8:00PM)</p>
             	  </div>
             	  <div class='n_margin'>
             	  	 <span class='pad'></span>
             	  	 <p class='little'>400-662-9898(上海)</p>
             	  </div>
             	  <div class='n_margin'>
             	  	 <span class='pad'></span>
             	  	 <p class='little'>400-819-0019(北京)</p>
             	  </div>
             	  <div class='n_margin'>
             	  	 <span class='pad'></span>
             	  	 <p class='little'>020-87085251</p>
             	  </div>
             	  <div class='room'>
             	  	
             	  </div>
             	  <div class='n_margin'>
             	  	 <span class='pad'></span>
             	  	 <p class='little'>租后管家服务(7*24H)</p>
             	  </div>
             	  <div class='n_margin'>
             	  	 <span class='pad'></span>
             	  	 <p class='little'>400-600-2888</p>
             	  </div>

             	  <div class='room1'>
             	  	
             	  </div>

             	  <div>
             	       <span class='pad'></span>
             	  	  <span><img src="../../../imgs/wechat.png"></span>
             	  	  <span><img src="../../../imgs/weibo.png"></span>
             	  </div>
             </div>
          


	 </div>

</template>
<script >
   module.exports={
   	 data:function(){
   	 	  return {
               flag1:false,
              items:[
                {'title':'首页','flag':false},
                {'title':'YO指南','flag':false},
                {'title':'租家','flag':false},
                {'title':'租生活','flag':false},
                {'title':'精选活动','flag':false},
                 {'title':'品牌动态','flag':false}
              ]
   	 	  }
   	 },
     methods:{
     	 search:function(event){
             event.target.setAttribute("placeholder","");
            
     	 },
       search1:function(event){
             event.target.setAttribute("placeholder","搜索你感兴趣的");
            
       },
     	 move:function(item){
             item.flag=true;
     	 },
       move1:function(){
           this.flag1=true;
       },
     	 leave:function(item){
             item.flag=false;
     	 },
       leave1:function(){
           this.flag1=false;
       },
     }


   }

</script>

<style scoped >
    .fadeInLeft,.zoomIn{
        animation-duration: 2s;
     }

	 #body2{
	 	 width: 245px;
	 	 height: 1280px;
     background-image: url('../../../imgs/banner_bg.png');
     background-size: cover;
        
	 }
    

     .banner1{
     	 width: 100%;
     	 height: 600px;
         
         
     }
     .banner1 .inner{
     	 
     	 width: 100%;
     	 height: 50px;
     	 display: flex;
         justify-content: space-between;
         
     }
     .banner1 .inner .space{
     	 width: 20px;
     	 height: 50px;
     }
     .banner1 .inner .left1 img{
     	 position: relative;
     	 top: 1px;
     }
     .banner1 .inner .left1 .p_l{
     	 padding-left: 5px;
     }
     .banner1 .inner .right1{
     	 display: flex;
     	 justify-content: flex-end;
     }
     .banner1 .inner div{
         	 width:auto;
         	 height: 50px;
         	 display: flex;
         	 color: white;
         	 font-size: 14px;
         	 align-items: center;
      }
      

      #logo{
      	 width: 100%;
      	 height: 130px;
      	 display: flex;
      	 justify-content: center;
      	 align-items: center;

      }


      #lists{
      	 width: 100%;
      	 height: auto;
      	

      }
      #lists p{
      	 display: flex;
      	 height: 30px;
      	 font-size: 16px;
      	 color: white;

      }
      #lists p .pad{
      	  flex-basis: 35px;
      	  height: 30px;
      	  
      }
      #lists p .border{
      	  
      	  border-left: 6px #F5F5F5 solid;
      }
      #lists p .moveright{
      	  position: relative;
          animation: myfirst 1s  forwards;
          animation-timing-function: ease-in-out;
      }
        @keyframes myfirst
		 {
		from {left: 0px;top:0px;}
		to {left:20px;top:0px;}
		}


      #lists p .title{
      	  flex-grow: 1;
      	  height: 30px;
      }

      
      #lists p .title span{
        padding-left: 10px;
        position: relative;
        top: -2px;
      }
       #lists p .title .circle{
          width: 20px;
          height: 20px;
          border-radius: 15px;
          padding-left: 0;
          padding: 5px;
          background-color: white;
          color: black;
          position: relative;
          left: 50px;

      }
      #lists .search {
      	 width: 100%;

      }
      #lists .p_t{
      	 padding-top: 8px;
      }
      #lists .search span{
      	  width: 20px;
      	  height: 40px;
      }
      #lists .search input{
      	  width: 204px;
      	  height: 30px;
      	  border: 1px solid white;
      	  outline: none;
      	  background-color: transparent;
      	  text-indent: 15px;
      	  color: white;
      	  font-size: 14px;
      }
      
input:-ms-input-placeholder {
    color: white;
}

input::-webkit-input-placeholder{
    color: white;
}


       #link{
       	 width: 100%;
       	 height: 220px;
       	 
       	 margin: 0;
       	 padding: 0;
       	 opacity: 0.8;
       }
       #link div{
       	 width: 100%;
       	 height: 25px;
       	 display: flex;
       }
      
       #link div span{
       	 flex-basis: 35px;
       }
       #link div p{
       	  font-size: 16px;
       	  color: white;
       	  margin: 0;
       }
       #link div.n_margin{
       	  height: auto;
       }
       #link .room{
       	 width: 100%;
       	 height: 10px;
       }
       #link .room1{
       	 width: 100%;
       	 height: 25px;
       }
       #link div .little{
       	  font-size: 13px;
       }


 



</style>