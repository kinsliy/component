<template>
	<div id='body'>
	  <div  v-for='item in items'>
		   <div class='left'>
		   	  <img v-bind:src="item.img">
		   	  <span>YOPARK</span>
		   </div>
		   <div class='right'>
		   	  <div class='top'>
		   	  	    <div class='top1'><span>{{item.title}}</span></div>

		   	  	    <div class='top2'>
		   	  	    	
		   	  	    	 <span>{{item.aprtment}}</span>
		   	  	    </div>
		   	  	   <!--  <div class='top3'>
		   	  	    	 <span>{{item.config}}</span>|
		   	  	    	 <span>&nbsp{{item.size}}</span>
		   	  	    </div> -->

                    <div class='bottom' >
                    	  <span
             >￥<span>{{item.price}}</span>&nbsp&nbspX 1
             </span>
              <span>合计:￥{{item.price}}</span>
                    </div>


		   	  </div>
		   	  <div class='bottom1'>
		   	  	 
             <span><img v-bind:src="item.date_time"><span>预约时间{{item.time}}</span></span>
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
                     {flag:true,img:'../../imgs/rent.jpg',title:'浦东新区汇豪天下三房二厅',rent:'可租',aprtment:'世茂滨江',price:'15000',date_time:'../../imgs/date_time.png',time:'2016.12.31  9:00-10:00'},
                     {flag:true,img:'../../imgs/rent.jpg',title:'浦东新区汇豪天下三房二厅',rent:'可租',aprtment:'世茂滨江',price:'15000',date_time:'../../imgs/date_time.png',time:'2016.12.31  9:00-10:00'},
                     {flag:false,img:'../../imgs/rent.jpg',title:'浦东新区汇豪天下三房二厅',aprtment:'世茂滨江',size:'147平米',price:'15000',date_time:'../../imgs/date_time.png',time:'2016.12.31  9:00-10:00'},
                  ]
		  	  }
		  },
	}


</script>

<style scoped>
	  #body{
	  	 width: 760px;
	  	 height: 100%;
	  	 /*margin: 0 auto;*/
	  }
      #body >div{
         width: 100%;
         height: 140px;
         padding-bottom: 30px;
         padding-top: 30px;
         border-bottom: 1px solid #f1f1f1;
         display: flex;


      }
      #body .left{
      	  width: 200px;
      	  height:140px;
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
         height: 140px;
         display: flex;
         flex-direction: column;
         margin-left: 38px;
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
      	 margin-top: 2px;
      	 display: flex;
      	 color: #a9a9a9;
      	 font-size: 16px;

      }
      .right .top2 span{
      	 
      	 color: #dcbf71;
      }

      .right .top4{
      	 margin-top: 17px;
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
       	 margin-top: 35px;
         font-size: 18px;
       }

        .bottom >span:nth-child(1){
           color: #c5c5c5;
        }

        .bottom >span:nth-child(2){
            margin-left: 30px;
            font-size: 20px;
            font-weight: bold;
        }

        .bottom1{
         position: relative;
         top: 5px;
         display: flex;
       }
       .bottom1>span>img{
        position: relative;
        top: 5px;
        margin-right: 10px;
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