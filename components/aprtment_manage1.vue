<template>
	<div id='body'>
	  <div  v-for='item in items'>
		   <div class='left'>
		   	  <img v-bind:src="item.img">
		   	  <!-- <span>YOPARK</span> -->
          <div class='left_upload'>
              <div><img src="../imgs/add_img_white.png"></div>
              <span>上传照片</span>
              <input type="file" name="">
          </div>
		   </div>
		   <div class='right'>
		   	  <div class='top'>
		   	  	    <div class='top1'><span>{{item.title}}</span>
                <span>{{item.rent}}</span>
                </div>
                 
		   	  	    <div class='top2'>
		   	  	    	
		   	  	    	 <span>{{item.aprtment}}</span>
		   	  	    </div>
		   	  	   <!--  <div class='top3'>
		   	  	    	 <span>{{item.config}}</span>|
		   	  	    	 <span>&nbsp{{item.size}}</span>
		   	  	    </div> -->

                    <div class='bottom' >
                    	  <span
             >￥<span>{{item.price}}</span>/月
             </span>
             
                    </div>


		   	  </div>
		   	  <div class='bottom1'>
		   	  	 <span v-bind:class='{"btn_index":!btn.flag}' v-for='btn in item.btns'>{{btn.title}}</span>
            
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
                     {flag:true,img:'../../imgs/bg_fuzzy.png',title:'浦东新区汇豪天下三房二厅',rent:'已上架',aprtment:'潍坊西路1-2弄',price:'15000',btns:[
                         {title:'下架',flag:true,},
                         {title:'修改',flag:true,},
                         {title:'删除',flag:false,},
                       ]},
                     {flag:true,img:'../../imgs/bg_fuzzy.png',title:'浦东新区汇豪天下三房二厅',rent:'已上架',aprtment:'潍坊西路1-2弄',price:'15000',btns:[
                         {title:'下架',flag:true,},
                         {title:'修改',flag:true,},
                         {title:'删除',flag:false,},
                       ]},
                     {flag:false,img:'../../imgs/bg_fuzzy.png',title:'浦东新区汇豪天下三房二厅',aprtment:'潍坊西路1-2弄',rent:'已上架',price:'15000',btns:[
                         {title:'下架',flag:true,},
                         {title:'修改',flag:true,},
                         {title:'删除',flag:false,},
                       ]},
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
      .left_upload{
         position: absolute;
         width: 100%;
         height: 100%;
         top: 0;
         left: 0;
         
         display: flex;
         flex-direction: column;
         z-index: 99;
         

      }
      .left_upload div{
         width: 100%;
         height: auto;
         display: flex;
         margin-top: 30px;
         justify-content: center;
      }
      .left_upload input{
         position: absolute;
         display: flex;
         width: 100%;
         height: 100%;
         top: 0px;
         left: 0px;
         z-index: 99999;
         opacity: 0;
      }
      #body .left .left_upload div img{
         width: 38px;
         height: 38px;
      }
      .left_upload span{
        width: 100%;
        height: auto;
        display: flex;
        margin-top: 20px;
        font-size: 18px;
        /*font-weight: bold;*/
        color: white;
        justify-content: center;
      }



      /*#body .left span{
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
      }*/
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
          background-color: black;
      	 padding-left: 15px;
      	 padding-right: 15px;
      	 border-radius: 15px;
      	 font-size: 12px;
      	 display: flex;
         color: white;

      	 align-items: center;
      	 justify-content: center;
      }
      
  
      .right .top2,.right .top3{
      	 margin-top: 2px;
      	 display: flex;
      	 color: #a9a9a9;
      	 font-size: 16px;

      }
      .right .top2 span{
      	 
      	 color: #b5b5b5;
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
      	 
       }
       .bottom{
       	 margin-top: 10px;
         font-size: 16px;
       }

        .bottom span>span:nth-child(1){
            font-size: 18px;
            font-weight: bold;
        }
        .btn_index{
            border: 1px solid #a6a6a6;
            color: #a6a6a6;
        }
        

        .bottom1{
        /* position: relative;
         top:3px;*/
         display: flex;
       }
      .bottom1 span{
         width: 48px;
         height: 28px;
         border: 1px solid black;
         display: flex;
         justify-content: center;
         align-items: center;
         margin-right: 20px;
         font-weight: bold;
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