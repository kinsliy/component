<template>
	
   <div>
   	   <div class='content'>
        	   <div class='content1'>
                    <div class='info' v-for='item in items'>
                           <span>{{item.tip}}</span>
                        <img :src="item.img">
                        <p>{{item.content}}</p>
                    </div>
             </div>


   </div>


</template>


<script>
	module.exports={
		  data:function(){
		  	  return{
                   items:[
                      {img:'../../imgs/guess.png',content:'资讯内容标题资讯内容标题资讯',tip:'居上海'},
                      {img:'../../imgs/guess.png',content:'资讯内容标题资讯内容标题资讯',tip:'食上海'},
                      {img:'../../imgs/guess.png',content:'资讯内容标题资讯内容标题资讯',tip:'居上海'},
                      {img:'../../imgs/guess.png',content:'资讯内容标题资讯内容标题资讯',tip:'居上海'},


                   ]
		  	  }
		  },


	}



</script>


<style scoped>
	   .content{
         width: 777px;
         height: auto;
         
       }
      .content1,.content2{
         margin-left: 15px;
         margin-right: 15px;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         padding-bottom: 30px;
         border-bottom: 1px solid #f1f1f1;
      }
       .content1 .info{
          margin-top: 30px;
          width: auto;
          height: auto;
          display: flex;
          flex-direction: column;
          position: relative;

      }
      .content1 .info:nth-child(2n){
         margin-left: 15px;
      }
      .content1 .info img{
         width: 365px;
         height: 240px;
      }
      .content1 .info p{
            margin: 0;
            height: 40px;
            width: auto;
            font-size: 20px;
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
      }
      
       .info span{
      	  position: absolute;
      	  top: 13px;
      	  left: 10px;
      	  border: 1px solid black;
      	  font-size: 12px;
      	  padding-top: 1px;
      	 padding-bottom: 1px;
      	 padding-left: 5px;
      	 padding-right: 5px;
      	 border-radius: 15px;
      	 background-color: rgba(255,255,255,0.4);
      	 
      }







       @media screen and (min-width:1500px){
          .content{
             width: 1200px;
             height: auto;
           }
          .content1 .info img{
           width: 547.5px;
            height: 360px;
          }
       

      }

</style>