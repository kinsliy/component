<template>
	<div class='repair_lists'>
		 <div v-for='item in items'  >
		 	   <div class='repair_node' @click='change(item)' v-bind:class='{"repair_index":item.flag}'>
		 	   	    <div>
		 	   	    <span><img v-bind:src="item.img"></span>
                    <span>{{item.title}}</span>
		 	   	    
                    
                    <span>{{item.content1}}<br>{{item.content1}}</span>
                    
                    <span><img v-bind:src="item.flag?item.select1:item.select"></span>

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
                    {content1:'小修.中修.大修.加氟.移机',img:'../../imgs/sofa.png',title:'空调维修',select:'../../imgs/select.png',select1:'../../imgs/select1.png',flag:false,},
                    {content1:'小修.中修.大修.加氟.移机',img:'../../imgs/sofa.png',title:'家电维修',select:'../../imgs/select.png',select1:'../../imgs/select1.png',flag:false,},
                    {content1:'小修.中修.大修.加氟.移机',img:'../../imgs/sofa.png',title:'电路维修',select:'../../imgs/select.png',select1:'../../imgs/select1.png',flag:false,},
                    {content1:'小修.中修.大修.加氟.移机',img:'../../imgs/sofa.png',title:'管道维修',select:'../../imgs/select.png',select1:'../../imgs/select1.png',flag:false,},
                    {content1:'小修.中修.大修.加氟.移机',img:'../../imgs/sofa.png',title:'房屋维修',select:'../../imgs/select.png',select1:'../../imgs/select1.png',flag:false,},
                    {content1:'小修.中修.大修.加氟.移机',img:'../../imgs/sofa.png',title:'灯具维修',select:'../../imgs/select.png',select1:'../../imgs/select1.png',flag:false,},
                    {content1:'小修.中修.大修.加氟.移机',img:'../../imgs/sofa.png',title:'卫浴维修',select:'../../imgs/select.png',select1:'../../imgs/select1.png',flag:false,},
                 ],
              }
		  },
		  methods:{
             change(item){
                 item.flag=!item.flag;
             }


		  }
	}


</script>

<style scoped>
	.repair_lists{
		 width: 100%;
		 height: auto;
		 display: flex;
		 flex-wrap: wrap;
		 border-top: 1px solid #e1e1e1;

	}
	.repair_lists>div{
       
       width: 24.81%;
       border: 1px solid #e1e1e1;
       border-left: none;
       border-top: none;
       height: 0;
       padding-bottom: 29%;
       position: relative;
       
	}
	.repair_lists>div:nth-child(4n+1){
       border-left: 1px solid #e1e1e1;
	}
    .repair_index{
    	  border: 1px solid black;
    }

     .repair_lists>div>div{
     	  position: absolute;
     	  width: 100%;
     	  height: 100%;
     	  display: flex;
     	  align-items: center;
     }

     .repair_node>div:nth-child(1){
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

     }
     .repair_node>div:nth-child(1)>span:nth-child(1){
     	 margin-top: 10px;
     }
     .repair_node>div:nth-child(1)>span:nth-child(2){
     	  font-size: 20px;
     	  font-weight: bold;
     }
     .repair_node>div:nth-child(1)>span:nth-child(3){
     	 display: flex;
     	 justify-content: space-around;
     	 flex-wrap: wrap;
     	 height: 70px;
     	 
     }


</style>