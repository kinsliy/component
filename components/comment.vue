<template>
	<div id='body'>
	     <span class='tip'>0/140字</span>
		 <textarea>
		 	   
		 </textarea>
		 <span class='comment'>发表评论</span>
	</div>

</template>

<script >
	module.exports={
		  data:function(){
             return {

             }
		  },
	}


</script>


<style scoped>
	 #body{
	 	 width: 100%;
	 	 height: auto;
	 	 display: flex;
	 	 flex-direction: column;
	 	 position: relative;
	 }
      #body >textarea{ 
          width: 100%;
          height: 125px;
         position: relative;
         display: flex;
         justify-content: center;
         align-items: center;
         resize: none;
       }
       #body .comment{
       	 display: flex;
       	 margin-top: 35px;
       	 width: 180px;
       	 height: 35px;
       	 border: 2px solid black;
       	 justify-content: center;
       	 align-items: center;
       	 border-radius: 30px;
       	 font-weight: bold;
       }
       #body .tip{
       	 width: 70px;
       	 height: auto;
       	 position: absolute;
       	 top: 100px;
       	 right: 5px;
       	 z-index: 99999;
       }
       @media screen and (min-width: 1500px){
      	    #body >textarea{
      	    	height: 187px;
      	    }
      	    #body .tip{
      	    	 top: 172px;
      	    }
     }
</style>