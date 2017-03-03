<template>
	<div id='body'>
	     <div @click='de()' class='default' v-bind:class='{"first":flag}'>
	     	默认推荐
	     </div>
		<!--  <div @click='change(item)'v-bind:class='{"index":item.flag}' v-for='item  in items'>
		 	  <span>{{item.content}}</span>
		 	  <span><img v-bind:src="item.img"></span>
		 </div> -->
	</div>

</template>

<script >
	 module.exports={
	 	  data:function(){
	 	  	  return {
	 	  	  	      flag:false,
                      // items:[
                      //   {flag:false,content:'价格',img:'../../imgs/select_up.png'},
                      //   {flag:false,content:'面积',img:'../../imgs/select_up.png'},
                      // ]
	 	  	  }
	 	  },
	 	  methods:{
	 	  	  change:function(item){
	 	  	  	   this.flag=true;
                   this.items.map(function(i){
                      i.flag=false;
                      i.img='../../imgs/select_up.png';
                   });
                   item.flag=true;
                   item.img='../../imgs/select_down.png';
	 	  	  },
              de:function(){
	 	  	  this.flag=false;
	 	  	  this.items.map(function(item){
                item.flag=false;
                item.img='../../imgs/select_up.png';
	 	  	  })
	 	      }


	 	    },
	 	  
	 }


</script>

<style scoped>
	#body{
		 width: 114px;
		 height:auto;
		 display: flex;
      
	}
    #body >div{
    	 width: 110px;
    	 height: 40px;
    	 margin-right: 20px;
    }
    #body .default{
    	 background-color: #000000;
    	 display: flex;
    	 justify-content: center;
    	 align-items: center;
    	 color: white;
    }
    #body .first{
    	 background-color: white;
    	 color: black;
    }
    #body >div{
    	 display: flex;
    	 justify-content: space-between;
    	 border: 1px solid black;
    }
    #body >div.index{
    	 background-color: black;
    	 color: white;
    }
    #body >div >span:nth-child(1){
    	 padding-left: 9px;
    	 height: 100%;
    	 display: flex;
    	 align-items: center;
    }
    #body >div >span:nth-child(2){
    	 padding-right: 9px;
    	 height: 100%;
    	 display: flex;
    	 align-items: center;
    }
</style>