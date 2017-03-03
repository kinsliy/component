<template>
	 <div class='body'>
	 	  <div class='zu_lists' v-for='item in lists'>
	 	  	  <div class='top'>
	 	  	  	 <img v-bind:src="item.img">
	 	  	  </div>
	 	  	  <div class='middle'>{{item.title}}</div>
	 	  	  <div class='bottom'>￥<span>{{item.price}}</span>起</div>

	 	  </div>

	 </div>
 

</template>

<script>
	module.exports={
		  data:function(){
		  	  return {
                 lists:[
                 {img:'../../imgs/rent.jpg',title:'商品名称商品名称商品名称商品名称',price:'15000',},
                 {img:'../../imgs/rent.jpg',title:'商品名称商品名称商品名称商品名称',price:'15000',},
                 {img:'../../imgs/rent.jpg',title:'商品名称商品名称商品名称商品名称',price:'15000',},
                 {img:'../../imgs/rent.jpg',title:'商品名称商品名称商品名称商品名称',price:'15000',},
                 {img:'../../imgs/rent.jpg',title:'商品名称商品名称',price:'15000',},
                 {img:'../../imgs/rent.jpg',title:'商品名称商品名称',price:'15000',},
                 {img:'../../imgs/rent.jpg',title:'商品名称商品名称商品名称商品名称',price:'15000',},
                 {img:'../../imgs/rent.jpg',title:'商品名称商品名称',price:'15000',},
                 {img:'../../imgs/rent.jpg',title:'商品名称商品名称',price:'15000',},

                 ],
		  	  }
		  }
	}


</script>

<style scoped>
	 .body{
	 	 width: 735px;
	 	 height: auto;
	 	 display: flex;
	 	 flex-wrap: wrap;
	 	 

	 }
	 .zu_lists{
	 	 width: 235px;
	 	 height: auto;
	 	 display: flex;
	 	 flex-direction: column;
	 	 margin-top: 30px;
	 	 margin-left: 15px;
	 }
     .zu_lists >div{
     	 width: 100%;
     	 height: auto;
     	 
     }
     .zu_lists:nth-child(3n+1){
     	 margin-left: 0;
     }
     .zu_lists .top{
     	 width: 100%;
     	 height: 165px;

     }
     .zu_lists .top img{
     	 width: 100%;
     	 height: 100%;
     }

     .zu_lists  .middle{
     	 width: 100%;
     	 height: auto;
     	 font-size: 18px;
     	 margin-top: 5px;

     	 overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap; 

     }

     .zu_lists  .bottom{
     	  width: 100%;
     	  height: auto;
     	  margin-top: 5px;
     }
     .zu_lists  .bottom span{
         font-size: 20px;
     }
      @media screen and (min-width: 1500px){
      	  .body{
      	  	 width: 1088px;
      	  }
     	  .zu_lists{
     	  	 width: 352.5px;
     	  }
     	  .zu_lists .top{
     	  	 
     	  	 height: 247.5px;
     	  }
     }



</style>