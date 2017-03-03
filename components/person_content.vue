<template>
	 <div id='person_content'>
	 	<div class='person_content_atomic' v-for='item in items'>
	 		 <div>
	 		 	<div>
	 		 	 <img v-bind:src="item.img">
                 <span v-if='item.tip'>{{item.tip}}</span>
	 		 	</div>

	 		 	<div>
	 		 	<span>{{item.title}}</span>
	 		 	<span v-if='item.flag'>(暂未开通)</span>

	 		 	</div>
	 		 </div>

	 	</div>

	 </div>


</template>

<script>
	 module.exports={
	 	  data:function(){
	 	  	  return {
                   items:[
                     {title:'委托出租',img:'../../imgs/email.png',tip:false,flag:false,},
                     {title:'房屋管理',img:'../../imgs/email.png',tip:false,flag:false,},
                     {title:'看房管理',img:'../../imgs/email.png',tip:2,flag:false,},
                     {title:'验房结果',img:'../../imgs/email.png',tip:false,flag:false,},
                     {title:'个人账号设置',img:'../../imgs/email.png',tip:4,flag:false,},
                     {title:'房屋检测服务',img:'../../imgs/email.png',tip:false,flag:false,},
                     {title:'房东金融服务',img:'../../imgs/email.png',tip:false,flag:false,},
                     {title:'资产服务管理',img:'../../imgs/email.png',tip:false,flag:false,},
                     {title:'租后服务托管',img:'../../imgs/email.png',tip:false,flag:false,},
                     {title:'财务管理',img:'../../imgs/email.png',tip:false,flag:true,},
                     {title:'智能家居',img:'../../imgs/email.png',tip:false,flag:true,},
                   ],
	 	  	  }
	 	  },

	 }


</script>

<style scoped>
	 #person_content{
	 	 width: 100%;
	 	 height: auto;
	 	 display: flex;
	 	 flex-wrap: wrap;
	 	 border: 1px solid #e1e1e1;
	 }
    
    .person_content_atomic{
    	  width: 24.8%;
    	  height: 0;
    	  padding-bottom: 36%;
    	  position: relative;
    	  border-right: 1px solid #e1e1e1;
    	  border-bottom: 1px solid #e1e1e1;
    }
    
    .person_content_atomic>div{
    	 position: absolute;
    	 width: 100%;
    	 height: 100%;
    	 display: flex;
    	 flex-direction: column;
    	 justify-content: center;
    	 align-items: center;

    }
    .person_content_atomic>div>div:nth-child(1){
    	 position: relative;
    }
    .person_content_atomic>div>div:nth-child(1)>span{
        position: absolute;
        top: -4px;
        left: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        color: white;
        border-radius: 30px;
        width: 40px;
        height: 20px;
    }
   .person_content_atomic>div>div:nth-child(2){
   	 margin-top: 20px;
   	 font-size: 18px;
   	 font-weight: bold;
   	 display: flex;
   	 flex-direction: column;
   	 align-items: center;
   	 position: relative;
   }
   .person_content_atomic>div>div:nth-child(2)>span:nth-child(2){
   	   position: absolute;
   	   bottom: -16px;
   	   left: 2px;
   	   font-size: 14px;
   	   color: #cbcbcb;
   }
</style>