<template>
	<div id='body'>
        <div class='top'>留言区(5条)</div>
        <div v-for='item  in items' class='middle'>
        	 <div class='m_top'>
        	 	<div class='m_left'><img v-bind:src="item.face"></div>
        	 	<div class='m_right'>
        	 	   <div class='m_right_top'>
        	 	   	   <span>{{item.name}}</span>
        	 	   	   <div @click='change(item)' class='like' v-bind:class='{"yellow":item.flag}'>
        	 	   	   	    <span><img v-bind:src="item.likeimg">
                               
        	 	   	   	    </span>
        	 	   	   	    <span class='like1' v-if='item.number'>+{{item.number}}</span>
        	 	   	   	    <span class='like2'>{{item.like}}</span>
        	 	   	   </div>
        	 	   </div>
        	 	   <span class='m_right_bottom'>{{item.time}}</span>
        	 	</div>
        	 </div>

            <div class='m_middle'>
            	  <div class='left'>
            	  	
            	  </div>
            	  <div class='right'>
            	  	<span></span>
            	  	<span>{{item.content}}</span>
            	  </div>

            </div>





        </div>
       
		

	</div>


</template>


<script >
	module.exports={ 
        data:function(){
        	  return {
                   items:[
                     {flag:false,face:'../../imgs/face.png',name:'呆呆',time:'2016.12.13',like:'赞同',likeimg:'../../imgs/like.png',number:12,content:'这家店我上个星期和好基友去过，超棒的，薯条乱好吃'},
                     {flag:false,face:'../../imgs/face.png',name:'呆呆',time:'2016.12.13',like:'赞同',likeimg:'../../imgs/like.png',number:false,content:'这家店我上个星期和好基友去过，超棒的，薯条乱好吃'},
                     {flag:false,face:'../../imgs/face.png',name:'呆呆',time:'2016.12.13',like:'赞同',likeimg:'../../imgs/like.png',number:12,content:'这家店我上个星期和好基友去过，超棒的，薯条乱好吃'},
                     {flag:false,face:'../../imgs/face.png',name:'呆呆',time:'2016.12.13',like:'赞同',likeimg:'../../imgs/like.png',number:false,content:'这家店我上个星期和好基友去过，超棒的，薯条乱好吃'},
                     {flag:false,face:'../../imgs/face.png',name:'呆呆',time:'2016.12.13',like:'赞同',likeimg:'../../imgs/like.png',number:12,content:'这家店我上个星期和好基友去过，超棒的，薯条乱好吃'},
                   ]
        	  }
        },
        methods:{
            change:function(item){
                item.like='已赞';
                item.likeimg='../../imgs/like_yellow.png';
                item.flag=true;

            }
        }


	}



</script>


<style scoped>
	 #body{
	 	 width: 100%;
	 	 height: auto;
	 	 display: flex;
	 	 flex-direction: column;
	 }
     .top{
     	 width: 100%;
     	 height: 30px;
     	 font-size: 18px;
     	 display: flex;
     	 justify-content: flex-start;
     }
     .middle{
     	 margin-top: 20px;
     	 width: 100%;
     	 height: auto;
     }
     .m_top{
     	 width: 100%;
     	 height: 40px;
     	 display: flex;

     }
     .m_left{
     	 width: 40px;
     	 height: 40px;
     }
     .m_left img{
     	 width: 100%;
     	 height: 100%;
     }

     .m_right{
     	 flex-grow: 1;
     	 height: 40px;
     	 display: flex;
     	 flex-direction: column;
     	 margin-left: 10px;

     }

     .m_right_top{
     	 width: 100%;
     	 height: 20px;
     	 display: flex;
     	 justify-content: space-between;
     	 font-size: 16px;
     }
     .m_right_bottom{
     	 width: 100%;
     	 height: 20px;
     	 display: flex;
     	 flex-direction: column;
     	 justify-content: flex-end;
     	 font-size: 12px;
     	 color: #9d9d9d;
     }

     .like{
     	 width: auto;
     	 height: 20px;
     	 display: flex;
         color: #9f9f9f;
     }
     .like.yellow{
     	 color: #e2cb8c;
     }
     .like >span:nth-child(1){
     	 width: 20px;
     	 height: 20px;
     	 position: relative;

     }
     .like >span:nth-child(1) img{
     	 width: 100%;
     	 height: 100%;
     }
     .like .like1{
        font-size: 12px;
        position: relative;
        top: -5px;
       
     }
     .like .like2{
     	 font-size: 14px;
     	 
     	 margin-left: 5px;
     	 height: 100%;

     }

    .m_middle{
    	width: 100%;
    	height: auto;
    	margin-top: 30px;
    	display: flex;
    }
    .m_middle .left{
    	 width: 50px;
    	 height: 100%;
    }
    .m_middle .right{
    	 display: flex;
    	 flex-direction: column;
    }
    .m_middle .right span:nth-child(1){
    	  width: 118px;
    	  height: 2px;
    	  background-color: #f1f1f1;
    } 
    .m_middle .right span:nth-child(2){
    	 margin-top: 15px;
    	 font-size: 14px;
    	 color: #9f9f9f;
    	 width: 100%;
    	 height: auto;
    }

</style>