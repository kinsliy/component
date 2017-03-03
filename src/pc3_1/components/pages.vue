<template>
	 <div id='body'>
	 	 <span v-bind:class='{"index":item.flag}'v-for='item in items'>{{item.content}}</span>
  
	 </div>


</template>

<script >
	 module.exports={
	 	 data:function(){
	 	 	  return {
                  items:[
                     {flag:false,'content':'<'},
                     {flag:true,'content':'1'},
                     {flag:false,'content':'2'},
                     {flag:false,'content':'3'},
                     {flag:false,'content':'...'},
                     {flag:false,'content':'5'},
                     {flag:false,'content':'>'},
                  ]
	 	 	  }
	 	 },


	 }


</script>

<style scoped>
	 #body{
	 	  width: 300px;
	 	  height: 50px;
	 	  margin: 0 auto;
	 	  display: flex;
          margin-top: 10px;
          margin-bottom: 10px;

	 }
     #body span{
     	 width: 45px;
     	 height: 100%;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     	 margin-left: 10px;
     	 margin-right: 10px;
     	 color: #a7a7a7;
     	 font-size: 16px;
     	 font-weight: bold;
     }
     #body span.index{
     	 color: black;
     }
     #body span:nth-child(5){
     	 position: relative;
     	 top: -5px;
     }
</style>