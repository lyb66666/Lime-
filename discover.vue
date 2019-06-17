<template>

    
    <div id="body">
        <tnav></tnav>
        <div id="main" >

            <articles v-for="(item) of items" :key='item' :name=item.name :time=item.time :paths=item.paths :tip=item.tip :upaths=item.upaths :pic1=item.pic1 :pic2=item.pic2 :pic3=item.pic3 :pic4=item.pic4 :text=item.text :t1=item.t1  :text1=item.text1  :t2=item.t2  :text2=item.text2 :t3=item.t3  :text3=item.text3 :t4=item.t4 :text4=item.text4  >
            </articles>
           <div id="right-aside">
               <div class="shop"></div>
               <div class="shopword"><a href="#">寻求合作|支持我们</a></div>
           </div>
           <button id="a" @click="addessay(items2,num)"  class="add">加载更多</button>
        </div>
        <router-view/>
        <foo></foo>
    </div>

</template>
<script>
import tnav from '@/components/nav'
import foo from '@/components/footer'
import articles from  '@/components/articles'
export default {
    name:'discover',
    components:{tnav,articles,foo},
    data(){return{items:[],items2:[],num:0}},
    created()
    {
        var that = this;
        this.$axios.get("http://localhost:3000/discover").then(response =>{
            console.log(response);
            this.items = response.data;
        }).catch(err => {
            console.log(err);
        });
        this.$axios.get("http://localhost:3000/discover2").then(response =>{
            console.log(response);
            this.items2 = response.data;
        }).catch(err => {
            console.log(err);
        })
    }, 
    methods:
    {
      addessay(items2,num)
      {
        var dd = items2[num];
        if(dd==null)
        {
          var m=document.getElementById("main");
          var a=document.getElementById("a");
          m.removeChild(a);
          return;
        }
        else
        {
          
          this.num++;
          var that = this;
          this.$axios.post("http://localhost:3000/discover",dd).then(response =>{
                console.log(response);
                this.items = response.data;
            }).catch(err => 
            {
                console.log(err);
            })
            this.$forceUpdate();
        }
      },
      
    }
    
}


</script>
<style scoped>
    *{margin: 0px;padding: 0px;border: 0px}
/* body{
  height: 100%;
} */
#body{
    width: 100%;
    position: relative;
    height: 100%;
   
    background-color: #fafbfd;
   
    
}
#main{
    overflow: hidden;
    width: 1200px;
    margin: 80px auto 0;
    position: relative;
    margin-bottom: 150px;
    
   
   
}
#logo{
  border: 1px solid seashell;
}
#main #logo img{
  width: 200px;
  margin-left: 500px;
}



#article{
  margin-left: 20px;
  margin-top: 20px;
  padding: 10px;
  width: 700px;
  height: 360px;
  border: 1px solid rgba(0, 0, 0, 0.215);
  border-radius: 2px;
  
}
#article:hover{
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.151);
}
.uimg{
  width: 40px;
  height: 40px;
}
.himg{
  width: 690px;
  height: 250px;
  
}  
#article header{
  margin-bottom: 15px;
}  
 #article header span{
   display: block;
   width: 100px;
   height: 30px;
   color: rgba(0,0,0,0.4);
   font-size: 12px;
   margin-left: 60px;
   margin-top: -40px;
 } 
 #article a{
   color: rgba(0,0,0);
   font-size: 20px;
   letter-spacing: 2px;
 }
 #article a:hover{
   color: red;
 }
 #article p{
   color: rgba(0, 0, 0, 0.615);
 }
 #right-aside{
   position: absolute;
   width: 300px;
   margin-top: 0px;
   margin-left: 840px;
   top: 20px;
   height: 400px;
 }
 .shop{
   position: absolute;
   top: 0;
   width: 300px;
   height: 200px;
   background: url(../../static/imgs/112.png) center center no-repeat;
   background-size: contain;
   border: 1px solid rgba(0, 0, 0, 0.215);
   border-radius: 2px;
   box-shadow: 1px 1px  2px rgba(0, 0, 0, 0.151); 
 }
 .shopword{
  position: absolute;
  top: 230px;
  width: 300px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.215);
   border-radius: 2px;
   box-shadow: 1px 1px  2px rgba(0, 0, 0, 0.151); 
}
.shopword a{
  color: rgba(0, 0, 0, 0.615);

}
.add{
  width: 1150px;
  height: 70px;
  position: relative;
  text-align: center;
  line-height: 70px;
  color: rgba(0,0,0,0.4);
  font-size: 16px;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 40px;
  background-color: #fafbfd;
  border: 1px solid rgba(0, 0, 0, 0.215);
   border-radius: 2px;
  letter-spacing: 2px;
  
}
.add:hover{
  box-shadow: 1px 1px  2px rgba(0, 0, 0, 0.151);
}
</style>
