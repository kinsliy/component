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

	  	  </div>
	  </div>

</template>

<script>
	 module.exports={
	 	 data(){
	 	 	 return{
	 	 	 	 items:[
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',flag:true,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',flag:true,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',flag:false,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',flag:false,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',flag:true,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',flag:false,},
	 	 	 	    {img:'../../imgs/life.png',title:'豪华全羽绒套餐',flag:true,},

	 	 	 	 ],

	 	 	 }
	 	 }
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

    @media screen and (min-width:1500px){
          .package_lists_node{
             width: 360px;
             
           }
          .package_lists_node>div:nth-child(1){
           
            height: 248px;
          }
        
      }


</style>