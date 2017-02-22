<template>
	 <div id='sign'>
	 	   <div class='top'>
	 	        <div id='error'>
	  	  	       	  <img src="../imgs/grey_close.png" @mouseover='move' @mouseout='leave'>
	  	  	        </div>
	 	   	   <p v-bind:class='{tip:flag}' @click='change'>注册</p>
	 	   	   <p v-bind:class='{tip:flag1}' @click='change1' class='lu'>登录</p>
	 	   </div>

          <div id='content'>
          	   <div class='content'>
          	   	     <input type="text"  placeholder="手机/账户名">
          	   	     <input type="password" placeholder="密码">
          	   	     <p><span class='ye'>找回密码</span><span>.没有账号？</span><span class='ye'>立即注册</span></p>

          	   	    <div id='btn'>
          	   	     	<div class='btn'>登录</div> 
          	   	    </div>

          	   	    <div id='chat'>
          	   	    	<p>手机验证登录</p>
          	   	        <p>社交账号登录</p>
          	   	    </div>
          	   </div>
          </div> 
          
          


	 </div>





</template>

<script >
	module.exports={
		  data:function(){
		  	  return {
                  flag:false,
                  flag1:true,
		  	  }
		  },
		  methods:{
		  	    move:function(e){
                 e.target.src='../../imgs/yellow_close.png'
	 	 	  },
	 	 	  leave:function(e){
                 e.target.src='../../imgs/grey_close.png'
	 	 	  },
               change:function(){
               	 this.flag=true;
               	 this.flag1=false;
               },
               change1:function(){
               	 this.flag1=true;
               	 this.flag=false;
               },
		  }
	}

</script>

<style scoped>
      #error{
     	 position: absolute;
     	 left: -50px;
     	 top: 10px;
     }
     .ye{
     	 color: #DAA520;
     }
	 #sign{
	 	 width: 350px;
	 	 height: 100%;
	 }
     .top{
     	 height: 50px;
     	 margin-top: 10px;
     	 display: flex;
     	 align-items: center;
     	 justify-content: center;
     	 font-size: 18px;
     	 position: relative;
     }
     .top p{
     	 font-size: 18px;
     	 color: #CDC5BF;
     	 width: 50px;
     	 height: 40px;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     }
     .lu{
     	 
     	 margin-left: 70px;
     }
      p.tip{
     	 color: black;
     	 border-bottom: 3px solid black;
     }

     #content{
     	 width: 100%;
     	 height: 200px;
     	 display: flex;
     	 margin-top: 5px;

     }
     .content{
     	 flex-grow: 1;
     	 margin-left: 25px;
     	 margin-right: 20px;
     	 display: flex;
     	 flex-direction: column;
     }
     .content input{
        width: 100%;
        line-height: 45px;
        outline: none;
        border: none;
        font-size: 16px;
        border-bottom: 1px solid #CDC9C9;
     }

     #btn{
     	 margin-top: 30px;
     	 width: 100%;
     	 height: 70px;
     	 padding-bottom: 35px;
     	 border-bottom: 1px solid #CDC9C9;
     }
     .btn{
     	 width: 100%;
     	 height: 40px;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     	 font-size: 20px;
     	 color: #CDC9C9;
     	 border: 2px solid #CDC9C9;
     	 border-radius: 30px;
     }
   
     #chat{
     	 width: 100%;
     	 height: auto;
     	 display: flex;
     	 flex-direction: column;
     	 justify-content: flex-start;
     }
     #chat p{
     	 margin: 0;
     	 line-height: 30px;
     	 font-size: 14px;
     	 color: black;

     }
</style>