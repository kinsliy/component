<template>
	<div id='body'>
	  <div  v-for='item in items'>
		   <div class='left'>
		   	  <img v-bind:src="item.img">
		   	  <span>YOPARK</span>
		   </div>
		   <div class='right'>
		   	  <div class='top'>
		   	  	    <div class='top1'><span>{{item.title}}</span><span v-bind:class='{"rent":item.flag}'>{{item.rent}}</span></div>

		   	  	    <div class='top2'>
		   	  	    	 <span>{{item.location}}</span>
		   	  	    	 <span>{{item.aprtment}}</span>
		   	  	    </div>
		   	  	    <div class='top3'>
		   	  	    	 <span>{{item.config}}</span>|
		   	  	    	 <span>&nbsp{{item.size}}</span>
		   	  	    </div>

                    <div class='top4' >
                    	 <span v-for='item in item.tips'>{{item}}</span>
                    </div>


		   	  </div>
		   	  <div class='bottom'>
		   	  	 <span
		   	  	 >￥<span>{{item.price}}</span>/月
		   	  	 </span>
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
                     {flag:true,img:'../../imgs/rent.jpg',title:'浦东新区汇豪天下三房二厅',rent:'可租',location:'潍坊西路1-2弄',aprtment:'世茂滨江',size:'147平米',config:'3室2厅2卫','tips':['月租','北欧风格','北欧风格','家居'],price:'15000'},
                     {flag:true,img:'../../imgs/rent.jpg',title:'浦东新区汇豪天下三房二厅',rent:'可租',location:'潍坊西路1-2弄',aprtment:'世茂滨江',size:'147平米',config:'3室2厅2卫','tips':['月租','北欧风格','北欧风格','家居'],price:'15000'},
                     {flag:false,img:'../../imgs/rent.jpg',title:'浦东新区汇豪天下三房二厅',rent:'不可租',location:'潍坊西路1-2弄',aprtment:'世茂滨江',size:'147平米',config:'3室2厅2卫','tips':['月租','北欧风格','北欧风格','家居'],price:'15000'},
                  ]
		  	  }
		  },
	}


</script>

<style scoped>
	  #body{
	  	 width: 760px;
	  	 height: 100%;
	  	 margin: 0 auto;
	  }
      #body >div{
         width: 100%;
         height: 200px;
         padding-bottom: 30px;
         padding-top: 30px;
         border-bottom: 1px solid #f1f1f1;
         display: flex;


      }
      #body .left{
      	  width: 300px;
      	  height: 200px;
      	  position: relative;
      }
      #body .left span{
      	  position: absolute;
      	  top: 13px;
      	  left: 10px;
      	  color: #878685;
      	  border: 1px solid #878685;
      	  font-size: 12px;
      	  padding-top: 1px;
      	 padding-bottom: 1px;
      	 padding-left: 5px;
      	 padding-right: 5px;
      	 border-radius: 15px;
      	 background-color: rgba(255,255,255,0.4);
      }
      #body .left img{
      	 width: 100%;
      	 height: 100%;
      }

      #body .right{
         flex-grow: 1;
         height: 200px;
         display: flex;
         flex-direction: column;
         margin-left: 16px;
         justify-content: space-between;
      }
      .right .top1{
      	 display: flex;
      	 position: relative;
      	 top: -3px;
      	 align-items: center;
      }
      .right .top1 span:nth-child(1){
        font-size: 18px;
      }
      .right .top1 span:nth-child(2){
         margin-left: 15px;
         height: 18px;
          background-color: #a6a6a6;
      	 padding-left: 15px;
      	 padding-right: 15px;
      	 border-radius: 15px;
      	 font-size: 12px;
      	 display: flex;
      	 align-items: center;
      	 justify-content: center;
      }
      .right .top1 span:nth-child(2).rent{
      	 background-color: black;
      	 color: white;
      }
  
      .right .top2,.right .top3{
      	 margin-top: 10px;
      	 display: flex;
      	 color: #a9a9a9;
      	 font-size: 16px;

      }
      .right .top2 span:nth-child(2){
      	 margin-left: 15px;
      	 color: #dcbf71;
      }

      .right .top4{
      	 margin-top: 27px;
      	 display: flex;
      	 width: 100%;
      }
       .right .top4 span{
       	  font-size: 12px;
       	  margin-right: 5px;
       	  border: 1px solid #878685;
       	   padding-top: 1px;
      	 padding-bottom: 1px;
      	 padding-left: 8px;
      	 padding-right:8px;
      	 border-radius: 15px;
      	 color: #cacaca;
       }
       .bottom{
       	 position: relative;
       	 top: 10px;
       }
       .bottom >span>span{
       	 font-size: 26px;
       }

       @media screen and (min-width: 1500px){
      	  #body{
      	  	 width: 1112px;
      	  }
     	  #body >div,#body .right{
     	  	 height:300px;
     	  }
     	  #body .left{
     	  	 width: 450px;
     	  	 height: 300px;
     	  }
     }
</style>