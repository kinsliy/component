<template>

	 	  <div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div v-for='item in items' class="swiper-slide">
		    	 <div >
		    	    <div>
		    	 	 <p>{{item.title}}</p>
		    	 	 <span>{{item.content}}</span>
		    	 	 </div>
		    	 </div>
		    </div>
		        
		  </div>
             <div id='search1'>
                 <div v-bind:class='{cover:flag}'>
                 	
                 </div>
		      	  <input type="text" v-model='info' v-bind:class='{big:flag}' placeholder="搜索" v-on:focus='search'  @blur='search1'>
		      	  <div id='info' v-if='flag1'>
		      	       <div class='cover1'></div>
			      	  <div>{{info}}(房源)</div>
			      	  <div>{{info}}(资讯)</div>
			      	  <div>{{info}}(商品)</div>
		          </div>
		      </div>
		      
		</div>

	

</template>

<script >
  var swiper = require('../assets/swiper.min.js')
	 module.exports={
	 	  data:function(){
	 	  	  return {
	 	  	  	  flag:false,
	 	  	  	  flag1:false,
	 	  	  	  info:'',
                  items:[
                    {
                    	title:'行所致 家所在',
                    	content:'我知道她，总有某个时刻，你想回家,我知道，总有某个时刻，你想回家,我知道，总有某个时刻，你想回家',

                    },
                    {
                    	title:'行所致 家所在',
                    	content:'我知道我，总有某个时刻，你想回家,我知道，总有某个时刻，你想回家,我知道，总有某个时刻，你想回家'
                    },
                    {
                    	title:'行所致 家所在',
                    	content:'我知道你，总有某个时刻，你想回家,我知道，总有某个时刻，你想回家,我知道，总有某个时刻，你想回家'
                    },
                  ]
	 	  	  }
	 	  },
	 	  mounted:function(){
	     var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000,

	           })
	 	  },
	 	  computed:{
             // flag1:function(){
             // 	  if(this.info=''){
             // 	  	 return false
             // 	  }else{
             // 	  	 return true;
             // 	  }
             // }
	 	  },
	 	  methods:{
	 	  	  search:function(event){
	 	  	  	  this.flag=true;
	 	  	  	   event.target.setAttribute("placeholder","");
	 	  	  	   this.flag1=true;
	 	  	  },
	 	  	  search1:function(event){
	 	  	  	  this.flag=false;
	 	  	  	   event.target.setAttribute("placeholder","搜索");
	 	  	  	   this.flag1=false;
	 	  	  },

	 	  }

	 }

</script>

<style scoped>
	 .swiper-container{
	 	 width: 100%;
	 	 height: 100%;
	 	 position: relative;
	 }
	 .swiper-slide{
	 	 
	 	  background-image:url('../imgs/loop_bg.jpg');
         background-size: cover;
         overflow: hidden;
         position: relative;

	 	  
	 }
	 .swiper-slide >div{
         width: 100%;
         height: 100%;
         background-color:black;
         opacity: 0.3;
	 }
	 .swiper-slide div div{
	 	  position: absolute;
	 	  top: 100px;
	 	  left: 6.67%;
	 	   
	 }
	 .swiper-container  #search1{
	 	   width:auto;
	 	   height: 28px;
	 	   
	 	   position: absolute;
	 	   left: 6.67%;

	 	   bottom: 30%;
	 	   z-index: 9999;

	 	   position: relative;
	 	  
	 }
	 .swiper-container #search1 input{
          border: 2px solid white;
          width: 160px;
          height: 28px;
          border-radius: 20px;
          background-color: transparent;
          font-size: 16px;
          outline: none;
          color: white;
          text-indent: 60px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 9999;

	 }
	 .swiper-container #search1 .cover{
          position: absolute;
          top: 0;
          left: 0;
         
          animation: myfirst1 1.8s  forwards;
          animation-timing-function: ease-in-out;


	 }
	 .swiper-container #search1 #info{
         width: 270px;
         height: 75px;
         
          position: absolute;
          top: 33px;
          left: 17px;
          animation: myfirst2 1s  forwards;
          animation-timing-function: ease-in-out;

	 }
 .swiper-container #search1 #info .cover1{
 	    width: 100%;
 	    height: 75px;
 	     background-color: white;
          opacity: 0.2;
          position: absolute;
          top: 0;
          left: 0;
 }
	
	 .swiper-container #search1 #info div{

	 	 width: 100%;
	 	 height: 25px;
	 	 font-size: 14px;
         
          color: white;
          background-color: transparent;
          z-index: 9999999999;
	 	 border-top: 1px solid #D1D1D1;
	 }
      
       input.big{

          animation: myfirst 1s  forwards;
          animation-timing-function: ease-in-out;
       }
        @keyframes myfirst
		 {
		from {}
		to {width: 300px;text-indent: 20px;}
		}
		@keyframes myfirst2
		 {
		from {width: 100px;}
		to {width: 270px;}
		}

		@keyframes myfirst1
		 {
		from {}
		to {border: 2px solid white;
          width: 300px;
          height: 28px;
          border-radius: 20px;
          background-color: white;
          opacity: 0.2;
          
         }
		}

	  input:-ms-input-placeholder {
	    color: white;
		}

		input::-webkit-input-placeholder{
			 color: white;
		}
	 .swiper-slide div p{
	 	 font-size: 50px;
	 	 color: white;
	 	 margin: 0;
	 	 margin-bottom: 30px;
	 	 margin-top: 50px;
	 }
	 .swiper-slide div span{
	 	 color: white;
	 	 width: 300px;
	 	 display: flex;
	 	 flex-wrap: nowrap;

	 }


</style>