<template>
	<div id='lists'>
	     
          
              <div  class='tip5'>
              	  <div class='case' v-for='item in items'>
              	  	  <div><img src="../../../imgs/aprtment.png"></div>
                      <div>
                      	 <span>{{item.title}}</span><span class='down'>{{item.num}}<span class='gray'>套</span></span>
                      </div>
                      <div>
                      	 {{item.position}}
                      </div>

              	  </div>
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
	 	 width: 735px;
	 	 height: auto;
	 	 display: flex;
	 	 flex-direction: column;

	 }
     
    

	
     .tip5{
     	 width:100%;
     	 height: auto;
     	 display: flex;
     	 flex-direction: row;
     	 flex-wrap: wrap;
       padding-bottom: 30px;

     	 border-bottom: 1px solid #a8a8a8;
     }
     .tip5 .case{
     	 width: 235px;
       height: auto;
       margin-top: 30px;



     }
     .case:nth-child(3n-1){
     	 margin-left: 15px;
     	 margin-right: 15px;
     }
     .case div:nth-child(1){
       width: 236px;
       height: 163px;
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
    
    @media screen and (min-width: 1500px){
          #body{
             width: 1090px;
          }
        .tip5 .case{
           width: 352px;
        }
        .tip5 .case >div:nth-child(1){
           width: 352px;
           height: 244px;
        }
     }



</style>