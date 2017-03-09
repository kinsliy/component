<template>
	
 <div  class='sign_in'>
 	  <div class='sign_in_top'>
 	  	   <div>
 	  	   	    <span @click='tab_change(item,tabs)'  :class='{"sign_in_top_index":item.flag}' v-for='item in tabs'>{{item.content}}</span>
 	  	   </div>
 	  </div>


      <div class='sign_in_middle' v-if='show[0].flag'>
      	    
      	   	   <input type="text" placeholder="账户名">
      	   	   <input type="password" placeholder="密码（不少于6位）">
      	   	   <span>点击「注册」按钮,即代表你同意<span>《</span><span>YOPARK优帕克服务条款》</span></span>
      	   
             <p>
             	 注册
             </p>
   
       </div>



     <div class='sign_in_middle' v-if='show[2].flag'>
      	    
      	   	   <input type="text" placeholder="用户名">
      	   	   <input type="password" placeholder="验证码">
      	   	   <input type="password" placeholder="密码（不少于6位）">
      	   	   <input class='send' @click='send($event)' type='button' value='发送验证码'> 
                  
      	   	  
      	   	   <span><span>找回密码&nbsp</span>.没有账号&nbsp<span @click='login()'>立即注册</span></span>
      	   
             <p>
             	 登录
             </p>
   
        </div>






        <div class='sign_in_middle' v-if='show[1].flag'>
      	    
      	   	   <input type="text" placeholder="用户名">
      	   	   <input type="password" placeholder="密码">
      	   	   <span><span>找回密码&nbsp</span>.没有账号&nbsp<span @click='login()'>立即注册</span></span>
      	   
             <p>
             	 登录
             </p>
   
       </div>

   

      <div class='sign_in_middle' v-if='show[3].flag'>
      	    
      	   	   <input type="text" placeholder="用户名">
      	   	   <input type="password" placeholder="请输入验证码">
      	   	   <input class='send' @click='send($event)' type='button' value='发送验证码'> 
                  
      	   	   
      	   	   <span><span>找回密码&nbsp</span>.没有账号&nbsp<span @click='login()'>立即注册</span></span>
      	   
             <p>
             	 登录
             </p>
   
       </div>

   

        








      <div class='sign_in_bottom' v-if='show[0].flag||show[2].flag'>
      	    <div>
      	    	<span @click='change1(item)' v-for='item in (show[0].flag?sign1:sign11)'>{{item.title}}</span>
      	    	
      	    </div>
      </div>


      <div class='sign_in_bottom' v-if='show[1].flag||show[3].flag'>
      	    <div>
      	    	<span  @click='change(item)' v-for='item in (show[1].flag ?sign2:sign21)'>
      	    	   {{item.title}}
      	    	</span>
      	    	
      	    </div>
      </div>

      








 </div>
</template>


<script>
	export default {
		  data(){
		  	  return {
                 tabs:[
                   {flag:false,content:'注册',tab:0},
                   {flag:true,content:'登录',tab:1},
                 ],
                 show:[
                     {flag:false},
                     {flag:true},
                     {flag:false},
                     {flag:false},
                  ],
                  sign1:[
                      {
                  	  title:'手机验证注册',num:2,
                  	 
                     },
                     {
                      title:'社交账号注册',
                     }
                  ],
                     
                  sign11:[
                     {
                  	  title:'账户名注册',num:0,
                  	 
                     },
                     {
                     title:'社交账号注册',
                     }

                  ],
                     



                  sign2:[
                     {
                  	  title:'手机验证登录',num:3,
                  	 
                    },
                    {
                      title:'社交账号登录',
                    }
                  ],
                   sign21:[
                     {
                  	  title:'账户名登录',num:1,
                  	 
                    },
                    {
                      title:'社交账号登录',
                    }
                  ],  


                  
                  
		  	  }
		  },
		  methods:{
		  	  tab_change:function(item,tabs){
                  tabs.map(function(index){
                      index.flag=false;
                  });
                  item.flag=true;
                  this.show.map(function(index){
                     index.flag=false;
                  });
                  this.show[item.tab].flag=true;

		  	  },
              change:function(item){
              	 console.log(item.num);
              	 console.log(this.show)
              	  this.show.map(function(index){
                     index.flag=false;
                  });
                  if(item.num===1){
                   this.show[1].flag=true;
                  }else{
                  	  this.show[3].flag=true;
                  }

               },
               change1:function(item){
                   this.show.map(function(index){
                     index.flag=false;
                  });
                  if(item.num===2){
                   this.show[2].flag=true;
                  }else{
                  	  this.show[0].flag=true;
                  }
               },
               login:function(){
               	   this.show.map(function(index){
                     index.flag=false;
                  });
               	    this.tabs.map(function(index){
                      index.flag=false;
                  });
               	   this.show[0].flag=true;
               	   this.tabs[0].flag=true;
               },

               send:function(event){
                  var value =event.target;
                  value.value='59S重新发送';
                  value.disabled='disabled';
                  var num =58;
                  var clock = setInterval(function(){
                       if(num===0){
                       	  clearInterval(clock);
                       	  value.value='发送验证码';
                       	  value.disabled='';

                       }else{
                       	  value.value=num+'S重新发送';
                       	  num--
                       }


                  },1000)
               }
        
           

		  }



	}



</script>

<style scoped>
	 .sign_in{
	 	 width: 350px;
	 	 height: auto;
	     display: flex;
	     flex-direction: column;
	     border: 1px solid black;
	     padding-bottom: 40px;
	 }
    .sign_in_top{
    	  width: 100%;
    	  height: 67px;
    	  display: flex;
    	  justify-content:center;
     }
     .sign_in_top>div{
     	  width: 190px;
     	  height: 100%;
     	  display: flex;
     	  justify-content: space-between;
     }
     .sign_in_top span{
     	  width: 68px;
     	  height: 63px;
     	  display: flex;
     	  align-items: center;
     	  justify-content: center;
     	  font-size: 20px;
         font-weight: bold;
         color: #a09da7;
     } 

     .sign_in_top span.sign_in_top_index{
     	  color: black;
     	  
     	  border-bottom: 4px solid black;
     }



 
     .sign_in_middle{
     	  width: 100%;
     	  height: auto;
     	  display: flex;
     	 flex-direction: column;
     	  align-items: center;
     	  position: relative;
     }
    
     .sign_in_middle >input{
     	 width: 290px;
     	 height: 45px;
     	 border: none;
     	 border-bottom: 1px solid #e1e1e1;
     	 outline: none;
     	 font-size: 16px;
     }
     .sign_in_middle >span{
     	 width: 290px;
     	 height: 45px;
     	 padding-top: 4px;
     	 /*display: flex;
     	 align-items: center;*/

     	 font-size: 15px;
     }
     
     .sign_in_middle >span>span{
     	  
     	  color: #d8ae30;
     }

     .sign_in_middle >input.send{
       width: 100px;
       height: 35px;
       border: 1px solid black;
       display: flex;
       justify-content: center;
       align-items: center;
       position: absolute;
       top: 52px;
       right: 30px;
       background-color: white;
     }

     .sign_in_middle>p{
     	  display: flex;
     	  width: 290px;
     	  height: 40px;
     	  justify-content: center;
     	  align-items: center;
     	  border-radius: 40px;
     	  border: 2px solid #a09da7;
     	  margin-top: 30px;
     	  color: #a09da7;
     }



     .sign_in_bottom{
     	 width: 100%;
     	 height: auto;
     	 display: flex;
     	 justify-content: center;
     }

     .sign_in_bottom>div{
     	 width: 290px;
     	 height: auto;
     	 margin-top: 20px;
     	 border-top: 1px solid #a09da7;
     	 display: flex;
     	 flex-direction: column;
     	 padding-top: 5px;
     }
     .sign_in_bottom>div>span{
     	  width: 100%;
     	  height: 25px;
     	  display: flex;
     	  align-items: center;
     }



</style>