<template>
	 <div class='check'  >
	    <div  class='check1' v-for='item in items'>
	 	 <div class='top'>
	 	 	  <div>
	 	 	  	 <span><span>{{item.date}}</span><span>{{item.date1}}</span></span>
	 	 	  	 <span>{{item.month}}</span>
	 	 	  </div>
	 	 	  <div >
	 	 	  	
	 	 	  </div>
	 	 	  <div>
	 	 	  	  <div> 
	 	 	  	  	 <div>{{item.title}}</div>
	 	 	  	  <div><img src="../imgs/green.png">&nbsp{{item.pro}}</div>
	 	 	  	  </div>
	 	 	  	  <div>
	 	 	  	  	  <div>
	 	 	  	  	  	 <span><img src="../imgs/common.png"></span>
	 	 	  	  	  	 <span>完全正常{{item.number1}}项</span>
	 	 	  	  	  </div>

                      <div>
	 	 	  	  	  	 <span><img src="../imgs/little_question.png"></span>
	 	 	  	  	  	 <span>稍有问题{{item.number2}}项</span>
	 	 	  	  	  </div>

                      <div>
	 	 	  	  	  	 <span><img src="../imgs/question.png"></span>
	 	 	  	  	  	 <span>有问题{{item.number3}}项</span>
	 	 	  	  	  </div>



	 	 	  	  </div>
	 	 	  </div>
	 	 </div>
        </div>
	 </div>


</template>

<script>
	module.exports={
		   data:function(){
		   	  return{
                  items:[
                    {date:'0',date1:4,month:2017.02,
                      title:'租客退房',pro:'全部修复',number1:360,number2:18,number3:6}
                  ]
		   	  }
		   },
	}



</script>


<style scoped>
	  .check{
	  	 width: 530px;
	  	 height: auto;
	  }
	  .check1{
	  	 width: 100%;
	  	 height: 100%;
	  }
      .check .top{
      	  width: 100%;
      	  height: 60px;
      	 display: flex;
      }
      .check .top >div:nth-child(1){
      	  width: 60px;
      	  height: 100%;
      	  display: flex;
      	  flex-direction: column;
      	  justify-content: space-between;
      }
      .check .top >div:nth-child(1) > span:nth-child(1){
      	 font-size: 36px;
      	 display: flex;
      	 margin-top: 0;
      	 align-items: flex-start;
      	 justify-content: space-around;
      }
      .check .top >div:nth-child(1) > span:nth-child(1) span{
      	 display: flex;
      	 margin-top: 0;
      	 padding-top: 0;
      	 align-items: flex-start;
      }
      .check .top >div:nth-child(1)> span:nth-child(2){
      	  font-size: 14px;
      	  display: flex;
      	  justify-content: center;
      }

      .check .top >div:nth-child(2) {
      	 width: 2px;
      	 height: 100%;
      	 background-color: #a6a6a6;
      	 margin-left: 15px;
      	 margin-right: 15px;
      }
      .check .top >div:nth-child(3){
      	 display: flex;
      	 flex-direction: column;
      	 justify-content: space-between;

      }
      .check .top >div:nth-child(3)>div{
      	 display: flex;
      }
     .check .top >div:nth-child(3)>div:nth-child(1) >div:nth-child(1){
     	 width: auto;
     	 height: 25px;
     	 font-size: 20px;
     	 display: flex;
     	 align-items: center;
     	 font-weight: bold;

     }
      .check .top >div:nth-child(3) >div:nth-child(1)>div:nth-child(2){
        height: 25px;
        margin-left: 40px;
        color: green;
        font-size: 20px;
        display: flex;
        font-weight: bold;
        align-items: center;
      }
     
      .check .top >div:nth-child(3) >div:nth-child(2)>div{
      	  width: auto;
      	  height: 20px;
      	  display: flex;
          margin-left: 30px;

      }
      .check .top >div:nth-child(3) >div:nth-child(2)>div:nth-child(1){
          margin-left: 0;
      }
     .check .top >div:nth-child(3) >div:nth-child(2)>div >span:nth-child(1){
     	 width: 20px;
     	 height: 20px;
     	 margin-right: 10px;
     }
     .check .top >div:nth-child(3) >div:nth-child(2)>div>span:nth-child(1) img{
     	 width: 100%;
     	 height: 100%;
      }



</style>