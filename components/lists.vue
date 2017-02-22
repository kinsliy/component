<template>
	<div id='lists'>
	      <div class='list1'>
		 	  	 <div class='tip1'>
		 	  	 	 <img src="../imgs/position.png">
		 	  	 	 <span>首页 / 列表页</span>
		 	  	 </div>
		 	  	 <div class='tip2'>
		 	  	 	<img src="../imgs/back.png">
		 	  	 	<span>返回</span>
		 	  	 	<img class='position' src="../imgs/grey_open.png">
		 	  	 	<span class='pr'></span>
		 	  	 </div>
		 	  </div>
		 <div class='lists'>
		 	   <div class='tip3'>
		 	   	   <img src="../imgs/search.png">
		 	  <input type="text" name="" placeholder="请输入小区/地址/学校等">
		 	   </div>

              <div class='tip4'>
              	   <div class='left'>
              	   	  默认排序
              	   </div>

              	   <div class='right'>
              	   	  <span @click='select'>{{content}}</span>
              	   	  <span><img src="../imgs/arrow_down.png"></span>

              	   	  <div class='qu' v-if='flag'>
              	   	  	  <div @click='select1(item)' @mouseover='di(item)' @mouseout='qu(item)' v-bind:class='{di:item.flag}' v-for='item in qus'>{{item.content}}</div>
              	   	  	  
              	   	  </div>
              	   </div>
                  


              </div>
          
              <div  class='tip5'>
              	  <div class='case' v-for='item in items'>
              	  	  <div><img src="../imgs/aprtment.png"></div>
                      <div>
                      	 <span>{{item.title}}</span><span class='down'>{{item.num}}<span class='gray'>套</span></span>
                      </div>
                      <div>
                      	 {{item.position}}
                      </div>

              	  </div>
              </div>
           
             <div class='pages'  id='page'>
             	 <span> <</span>
             	 <span class='now'>1</span>
             	 <span>2</span>
             	 <span>3</span>
             	 <span class='top'>...</span>
             	 <span>5</span>
             	 <span>></span>


             </div>



		 </div> 
	</div>

</template>

<script>
	module.exports={
		   data:function(){
		   	  return {
		   	  	  flag:false,
		   	  	  content:'选择区县',
                  qus:[
                    {content:'静安区',flag:false},
                    {content:'浦东新区',flag:false},
                  ],
                  items:[
                    {
                      title:'世茂滨江花园',num:'333',position:'潍坊西路1-2弄'
                    },
                    {
                      title:'世茂滨江花园',num:'333',position:'潍坊西路1-2弄'
                    },
                    {
                      title:'世茂滨江花园',num:'333',position:'潍坊西路1-2弄'
                    },
                    {
                      title:'世茂滨江花园',num:'333',position:'潍坊西路1-2弄'
                    },
                    {
                      title:'世茂滨江花园',num:'333',position:'潍坊西路1-2弄'
                    },
                    {
                      title:'世茂滨江花园',num:'333',position:'潍坊西路1-2弄'
                    },
                    {
                      title:'世茂滨江花园',num:'333',position:'潍坊西路1-2弄'
                    },
                    {
                      title:'世茂滨江花园',num:'333',position:'潍坊西路1-2弄'
                    },
                    {
                      title:'世茂滨江花园',num:'333',position:'潍坊西路1-2弄'
                    },
                  ]
		   	  }
		   },
		   methods:{
              di:function(item){
                 item.flag=true;
              },
              qu:function(item){ 
                 item.flag=false;
               },
               select:function(){
               	  this.flag=true;
               },
               select1:function(item){
               	  this.flag=false;
                  this.content=item.content;
               }
		   }
	}


</script>

<style scoped>
    *{
    	 margin: 0;
    	 padding: 0;
    }
     .di{
     	 background-color: #f0f0f0;
     }

	 #lists{
	 	 width: 100%;
	 	 height: auto;
	 	 display: flex;
	 	 flex-direction: column;

	 }
     
    

	 .lists{
	 	 margin-left: 10px;
	 	 margin-right: 10px;
	 	 flex-grow: 1;
	 	 height: auto;
	 	 display: flex;
	 	 flex-direction: column;
	 	
	 }
   
      .list1{
     	 width: 100%;
     	 height: 70px;
     	 background-color: #f8f8f8;
     	 display: flex;
     	 justify-content: space-between;
     	 align-items: center;

     }
      .list1 .tip1 span{
      	 font-size: 14px;
      	 color: #9E9E9E;
      }
     .list1 .tip1 img{
         position: relative;
         top: 3px;
         padding-left: 10px;
     }
     .list1 .tip2{
     	 height: 70px;
     	 display: flex;
     	 align-items: center;
     }
     .list1 .tip2 span{
     	 padding-left: 10px;
     	 padding-right: 10px;
     	 font-size: 20px;
     	 color: #9E9E9E;
     }

     .list1 .tip2 .position {
     	  box-shadow: 5px 4px  14px #CDC8B1;
     	  
     }
     .list1 .pr{
     	 width: 13px;
     	 height: 70px;
     	 display: flex;
     }

    .tip3{
    	 width: 100%;
    	 height: 45px;
    	 display: flex;
    	 border-bottom: 1px solid #CDC5BF;

    }
     .tip3 img{
     	 flex-basis: 18px;
     	 height: 18px;
     	 position: relative;
     	 top: 13px;
     }

     .tip3 input{
         width: 500px;
         height: 45px;
     	 flex-grow: 1;
     	 line-height: 45px;
     	 outline: none;
     	 border: none;
     	 margin-left: 10px;
     	 font-size: 16px;
     	 
     }
     
     .tip4{
     	 width: 100%;
     	 height: 70px;
     	 margin-top: 30px;
     	 display: flex;
     	 flex-direction: row;
     }
     .tip4 .left,.right{
     	 width: 115px;
     	 height: 35px;
     	 background-color: black;
     	 color: white;
     	 display: flex;
     	 font-size: 16px;
     	 justify-content: center;
     	 align-items: center;
     }
     .tip4 .right{
     	 background-color: white;
     	 display: flex;
     	 margin-left: 12px;
     	 width: 165px;
     	 border: 1px solid #CDC0B0;
     	 justify-content: space-between;
     	 color: black;
     	 position: relative;
     }
     .tip4 .right span{
     	 flex-grow: 1
     }

     .tip4 .qu{
     	 width: 165px;
     	 height: auto;
     	 position: absolute;
     	 top: 36px;
     	 left:-1px;
     	 background-color: white;
     	 border:1px solid #d7d7d7;
     	 border-top: none;

     }
     .tip4 .qu div{
     	  width: 100%;
     	  height: 35px;
     	  display: flex;
     	  align-items: center;
     	  justify-content: center;
     }


     .tip4 .right span{
     	height: 35px;
     	 display: flex;
     	 justify-content: center;
     	 align-items: center;
     	 padding-left: 10px;
     	 padding-right: 10px;
     	 color: #bbbbbb;
    }

     .tip5{
     	 width: 100%;
     	 height: auto;
     	 display: flex;
     	 flex-direction: row;
     	 flex-wrap: wrap;
     	 border-bottom: 1px solid #a8a8a8;
     }
     .tip5 .case{
     	 width: 31%;
     	 height: auto;


     }
     .case:nth-child(3n-1){
     	 margin-left: 20px;
     	 margin-right: 20px;
     }
     .case div:nth-child(1){
       width: 100%;
       height: 60%;
     }
     .case div:nth-child(1) img{
     	 width: 100%;
     	 height: 100%;
     }

     .case div:nth-child(2){
     	 display: flex;
     	 line-height: 50px;
     	 justify-content: space-between;
     	 font-size: 18px;
     }
    .case div:nth-child(3){
    	 font-size: 14px;
    	 color: #959595;
    }
    .gray{
    	 color:#959595; 
    	 position: relative;
    	 top: -1px;
    }
    .down{
    	position: relative;
    	top: 1px;
    }
    
    .lists .pages{
    	width: 100%;
    	height: 100px;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }
    .pages span{
    	 width: 40px;
    	 height: 40px;
    	 margin-left: 10px;
    	 display: flex;
    	 align-items: center;
    	 color: #a8a8a8;

    }
    span.now{
    	 color: black;
    }
    .pages .top{
    	 position: relative;
    	 top: -5px;
    }
</style>