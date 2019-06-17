<template>
    <div>
        <div class="tnav">
        <router-view/>
        <tnav></tnav>
        </div>

         <router-view/>
         <ban></ban>
    <div id="body">
        <div id="main">
            <div class="left-aside">
                <router-view/>
                <top v-for="(item,index) in list" :info='item' :key="index"></top>  
            </div>

            <div class="right-aside">
            <section class="live">
            <header>
                <h3>LIVE</h3>
            </header>
            <h4>发现</h4>
            <div class="live-box">
                <div><img src="../assets/imgs/lp1.jpg" alt=""></div>
                <div><img src="../assets/imgs/lp2.png" alt=""></div>
                <div><img src="../assets/imgs/lp3.jpg" alt=""></div>
                <div><img src="../assets/imgs/lp4.jpg" alt=""></div>
                
            </div>
        </section>
        <section class="right-banner">
            <!-- <header>
                <h4>广告位</h4>
            </header>
            <div class="ban">
            </div> -->
        </section>

    
        </div>

    


   
   
    
    </div>
     <div id="bottom-banner">
            <header>Follow us@青柠摄区</header>
        
            <div class="d-banner">
                <router-view/>
                <dban></dban>
            </div>
        </div>
    <router-view/>
    <foo></foo>
  </div>

    </div>
</template>
<script>
import tnav from '@/components/nav'
import ban from '@/components/banner'
import dban from '@/components/dbanner'
import foo from '@/components/footer'
import top from '@/components/topcard'
export default {
    name:'home',
    components:{tnav,ban,dban,foo,top},
      data(){
        return{
                list:[
              {
                  name:'呦呦',
                  time:'2019-5-22',
                  paths:require("../assets/imgs/t2.jpg"),
                  words:'三九的梅花红了满山的雪，萧条枝影月牙照人眠'
              },
              {
                name:'卡莎',
                  time:'2019-5-3',
                  paths:require("../assets/imgs/t4.jpg"),
                  words:'塞北残阳是她的红妆，一山松柏做伴娘'
              },
              {
                  paths:require("../assets/imgs/t1.jpg"),
                  name:'安娜',
                  time:'2019-3-21',
                  words:'爆竹声里落尽一地红，家家户户都点上花灯'
              },
              {
                  paths:require("../assets/imgs/t3.jpg"),
                  name:'工藤新一',
                  time:'2019-2-1',
                  words:'烈火烧不尽心上的人，霜花满月就在此良辰'
              }


          ]
            }
    }
}
</script>

<style scoped>
.tnav{
    position: relative;
}


#body{
    width: 100%;
    height: 1200px;
   
    position: relative;
    overflow: hidden;
}
#main{
    width: 1200px;
    height: 1200px;
    margin:auto;
    position: relative;
    overflow: hidden;
    background-color:white;
}
.left-aside{
    float: left;
    width: 550px;
    margin: 20px 0 0 20px;
   
}
#bottom-banner{
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 180px;
    text-align: center;
    border-top: 1px solid rgba(163, 156, 156, 0.5);
    
}
#bottom-banner header{
    color: rgba(0,0,0,0.8);

}

.d-banner{
    margin-top: 10px;   
}
.right-aside{
    width: 500px;
    padding: 10px;
 
    margin: 20px 0 0 660px; 
  
}
.right-aside section{
    width: 300px;
    height: 300px;
    left: 180px;
    position: relative;
   
}
.right-aside h3{
    display: block;
    width: 60px;
    height: 24px;
    border: 1px solid rgba(0,0,0,0.4);
    color: rgba(0,0,0,0.6);
    line-height: 24px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 10px;
}
.right-aside h4{
    font-size: 14px;
    letter-spacing: 2px;
    color: rgba(0,0,0,0.4);
}
.live-box{
    width: 200px;
    height: 200px;
    position: absolute;
  
}
.live-box img{
    border-radius: 4px;
    width: 80px;
    height: 80px;
    opacity: 0.8;
}
.live-box img:hover{
    opacity: 1;
    transition: all 0.4s linear;
}
.live-box div{
    width: 80px;
    height: 80px;
    margin: 5px;
    float: left;
    z-index: 1;
    
}

.right-banner{
    width: 200px;
    height: 300px;
   
}
.right-banner h4{
    display: block;
    margin-bottom: 10px;
    color:rgba(0,0,0,0.4);
    font-size: 16px; 
    letter-spacing: 2px; 
}
</style>
