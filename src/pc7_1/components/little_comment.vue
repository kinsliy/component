<template>
	 <div id='body'>
	 	  <div class='top'>
	 	  	 发表评论
	 	  </div>
           
           <div class='middle'>
           	   <textarea></textarea>
           	   <span class='comment'>发表</span>
           </div>
	 </div>

</template>

<script>
	module.exports={
		 data:function(){
		 	  return {

		 	  }
		 },
		 methods:{

		 }
	}


</script>

<style scoped>
	 #body{
	 	 width: 155px;
	 	 height: auto;
	 }
     .top{
     	 width: 100%;
     	 height: auto;
     	 margin-bottom: 15px;
     	 font-size: 18px;
     }
     .middle{
       display: flex;
       flex-direction: column;
     }
     .middle >textarea{ 
          width: 100%;
          height: 75px;
         
         resize: none;
       }
      .middle .comment{
       	 display: flex;
       	 margin-top: 15px;
       	 width: 66px;
       	 height: 25px;
       	 border: 2px solid black;
       	 justify-content: center;
       	 align-items: center;
       	 border-radius: 30px;
       	 font-weight: bold;
       }

</style>