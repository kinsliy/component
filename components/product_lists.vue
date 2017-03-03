<template>
	  <div class='package_lists'>
	  	  <div class='package_lists_node' v-for='item in items'>
	  	  	    <div>
	  	  	    	 <img v-bind:src="item.img">
	  	  	    	 <span v-if='item.flag'>HOT</span>
	  	  	    </div>
                <div>
                	{{item.title}}
                </div>
                <div>
                	￥<span>{{item.price}}</span>x<span>{{item.num}}</span>
                </div>
	  	  </div>



	  </div>


</template>

<script>
	export default{
		  data(){
		  	 return{
                 items:[
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',price:1500,num:2,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',price:1500,num:2,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',price:1500,num:1,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',price:1500,num:2,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',price:1500,num:1,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',price:1500,num:1,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',price:1500,num:2,},
                  ],
		  	 }
		  },
	}


</script>


<style scoped>
	 .package_lists{
	 	 width: 100%;
	 	 height: auto;
	 	 display: flex;
         flex-wrap: wrap;
	 }
     .package_lists_node{
     	 width: 240px;
     	 height: auto;
     	 margin-top: 30px;
     	 margin-right: 20px;
     }

     .package_lists_node>div:nth-child(1){
     	  width: 100%;
     	  height: 165px;
     	  position: relative;
     }
     .package_lists_node>div:nth-child(1)>img{
     	 width: 100%;
     	 height: 100%;
     }
     .package_lists_node>div:nth-child(1)>span{
     	 position: absolute;
     	 right: 10px;
     	 top: 10px;
     	 width: 40px;
     	 height: 18px;
     	 border-radius: 20px;
     	 background-color: red;
     	 color: white;
     	 font-size: 14px;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     }
     .package_lists_node>div:nth-child(2){
     	 margin-top: 18px;
     	 width: 100%;
     	 height: auto;
     	 display: flex;
     	 font-size: 18px;
     }
      
      .package_lists_node>div:nth-child(3){
      	  font-size: 13px;
      	  margin-top: 8px;
      }
      .package_lists_node>div:nth-child(3) span{
      	 font-size: 18px;
      	 font-weight: bold;
      }



    @media screen and (min-width:1500px){
          .package_lists_node{
             width: 360px;
             
           }
          .package_lists_node>div:nth-child(1){
           
            height: 248px;
          }
        
      }

</style>