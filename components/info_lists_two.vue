<template>
	
   <div class='info_two'>
   	     <div class='content2'>
                 <div class='content22' v-for='item in items'>
                     <div class='content221'>
                         <img :src="item.img">
                         <span>{{item.tip}}</span>
                     </div>
                     <div class='content222'>
                           <div class='content31'>
                               {{item.title}}
                           </div>
                           <div class='content32'>
                               {{item.content}}
                           </div>
                           <div class='content33'>
                              <span v-for='item1 in item.tags1'>{{item1}}</span>
                              
                           </div>
                           <div class='content34'>
                               <span v-for='item2 in item.tags2'>{{item2}}</span>
                              
                           </div>
                           <div class='content35'>
                              {{item.time}}
                           </div>

                     </div>
                 </div>
            
                 </div>
             </div>


   </div>


</template>


<script>
	 export default{
         data(){
         	  return{
                   items:[
                     {img:'../../imgs/guess.png',title:'标题标题',content:'描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容',tags1:['家居','北欧风格','设计'],tags2:['北欧风格','家居','设计','两室两卫',],time:'2016.12.03',tip:'居上海'},
                      {img:'../../imgs/guess.png',title:'标题标题',content:'描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容',tags1:['家居','北欧风格','设计'],tags2:['北欧风格','家居','设计','两室两卫',],time:'2016.12.03',tip:'居上海'},
                      {img:'../../imgs/guess.png',title:'标题标题',content:'描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容',tags1:['家居','北欧风格','设计'],tags2:['北欧风格','家居','设计','两室两卫',],time:'2016.12.03',tip:'居上海'},
                      {img:'../../imgs/guess.png',title:'标题标题',content:'描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容',tags1:['家居','北欧风格','设计'],tags2:['北欧风格','家居','设计','两室两卫',],time:'2016.12.03',tip:'居上海'},
                     ],


         	  }
         },



	 }



</script>

<style scoped>

      .info_two{
      	  width: 100%;
      	  height: auto;
      	  overflow: hidden;
      }


	 .content2{
         margin-left: 15px;
         margin-right: 15px;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         padding-bottom: 30px;
         border-bottom: 1px solid #f1f1f1;
      }
      .content2{
         padding-bottom: 0px;
         border-bottom: none;
         display: flex;
         flex-direction: column;
         width: 100%;
         height: auto;
      }
      .content2 .content22{
          width: 100%;
          height: 200px;
          padding-top: 35px;
          padding-bottom: 35px;
          border-bottom: 1px solid #f1f1f1;
          display: flex;

      }
      .content22 .content221{
          width: 300px;
          height: 200px;
          position: relative;
      }
      .content22 .content221 img{
         width: 100%;
         height: 100%;
      } 

       .content22 .content221 span{
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



      .content222{
         display: flex;
         flex-direction: column;
         margin-left: 15px;
         overflow: hidden;
         justify-content: space-between;
      }
      .content222 .content31{
         font-size: 20px;
         position: relative;
         top: -5px;

      }
      .content222 .content32{
         font-size: 14px;
         color: #b7b7b7;
         margin-top: 10px;
         margin-bottom: 20px;
         padding-right: 10px;

      }
      .content222 .content33{
          margin-bottom: 10px;
          display: flex;
          height: 25px;

      }
      .content222 .content33 span{
           border: 1px solid #b7b7b7;
           padding: 5px;
           color: #b7b7b7;
           border-radius: 15px;
           margin-right: 10px;
           font-size: 14px;
           display: flex;
           justify-content: center;
           align-items: center;
      }
      .content222 .content34 span{
           border: 1px solid #b7b7b7;
           padding: 5px;
           color: #b7b7b7;
           border-radius: 15px;
           margin-right: 10px;
           font-size: 14px;
      }
      .content222 .content33 span:nth-child(2n-1){
        padding-left: 15px;
        padding-right: 15px;
          
      }
      .content222 .content34 span:nth-child(2){
        padding-left: 15px;
        padding-right: 15px;
          
      }
      .content222 .content34 span:nth-child(3){
        padding-left: 15px;
        padding-right: 15px;
          
      }
      .content222 .content35{
         margin-top: 30px;
         font-size: 14px;
         color: #b7b7b7;
         position: relative;
         top: 1px;
      }
   



        @media screen and (min-width:1500px){
          
        .content22 .content221{
          width: 450px;
          height: 300px;
        }

      }


</style>