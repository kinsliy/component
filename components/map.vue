<template>
  <div  id='map'>
  	
 
	 <div class='map'>
	 	 <img v-bind:src="map.img">


      <div class='bottom'>
      	 <span v-bind:class='{"index":item.flag}' v-for='item in items'>
      	 	{{item.title}}
      	 </span>
      </div>

	 </div>
 
      <div class='location'>
      	  <div v-for='(item,index) in locations'>
      	  	  <div><img src="../imgs/map.png">
                  <span>{{index+1}}</span>
      	  	  </div>
      	  	  <div>
      	  	  	 <span>{{item.title}}</span>
      	  	  	 <span>距离房间直线约{{item.number}}Km</span>
      	  	  </div>
      	  </div>
      </div>


    </div>

</template>

<script >
	module.exports={
		  data:function(){
		  	  return {
                  map:{
                  	 img:'../../imgs/rent.jpg'
                  },
                  items:[
                   {flag:true,'title':'机场'},
                   {flag:false,'title':'地铁站'},
                   {flag:false,'title':'美食'},
                   {flag:false,'title':'景点'},
                   {flag:false,'title':'娱乐'},

                  ],
                  locations:[
                    {title:'上海虹桥机场',number:2.7,},
                    {title:'上海浦东机场',number:10,},
                  ],
		  	  }
		  },

	}



</script>


<style scoped>
     #map{
     	 width: 100%;
     	 height: auto;
     }
	 .map{
	 	 width: 100%;
	 	 height: 0;
	 	 padding-bottom: 48%;
	 	 position: relative;

	 }
     .map img{ 
         position: absolute;
         width: 100%;
         height: 100%;

      }
      .map .bottom{
      	 position: absolute;
      	 left: 0;
      	 bottom:0;
      	 width: 100%;
      	 height: 70px;
      	 background: linear-gradient(transparent, white); 
      	 display: flex;
      	 justify-content: center;
      	 align-items: center;
      }
      .map .bottom span{
      	 margin-right: 22px;
      	 font-size: 20px;
      	 width: 60px;
      	 height: 60px;
      	 display: flex;
      	 justify-content: center;
      	 align-items: center;

      }
      .map .bottom span.index{
      	 font-weight: bold;
      	 border-bottom: 2px solid black;
      }

      #map .location{
      	 width: 100%;
      	 height: 125px;
      	 display: flex;
      	 align-items: center;

      }
      #map .location >div{
      	  margin-right: 80px;
      	  display: flex;
      	  height: 50px;
      	  /*margin-left: */
      	  
      }
      #map .location div >div:nth-child(1){
      	  width: 20px;
      	  height: 100%;
      	  position: relative;
      }
      #map .location div >div:nth-child(1) span{
         position: absolute;
         top: 0px;
         left:  3px;
         color: white;
         font-size: 12px;
      }
      #map .location div >div:nth-child(2){ 
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       }
       #map .location div >div:nth-child(2) >span:nth-child(2){
       	  font-size: 14px;
       	  color: #aeaeae;
       }
</style>