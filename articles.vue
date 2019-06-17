<template>

   <div id="article">
      <header>
          <img class='uimg' v-bind:src="upaths" alt="">
          <span>{{name}}<br>{{time}} 推荐</span>
      </header>
      <img class="himg" v-bind:src="paths" alt="">
      <router-link :to="{name:'de',params:{upaths:upaths,name:name,time:time,tip:tip,paths:paths,pic1:pic1,pic2:pic2,pic3:pic3,pic4:pic4,text1:text1,text:text,text2:text2,text3:text3,text4:text4,t1:t1,t2:t2,t3:t3,t4:t4 }}"><h3><a href="#">{{tip}}</a></h3></router-link>

  </div>

</template>
<script>

export default {
    name:'articles',
    data(){
        return{}
    },
    props:['upaths','name','time','tip','paths','pic1','pic2','pic3','pic4','text','text1','text2','text3','text4','t1','t2','t3','t4'],
     
}
</script>
<style scoped>

*{margin: 0px;padding: 0px;border: 0px}
body{
  height: 100%;
}
#body{
    width: 100%;
    background-color: #fafbfd;
   
    
}
#main{
 
    width: 1200px;
    margin: 80px auto 0;
    
    overflow: hidden;
   
   
}
#logo{
  border: 1px solid seashell;
}
#main #logo img{
  width: 200px;
  margin-left: 500px;
}
.nav{
    top: 0;
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 1;
    background-color:white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.315);
}
nav{
    width: 280px;
    height: 25px;
    position: relative;
    left: 1100px;
    top:-25px;
  
}
ul{
    list-style: none;
    
}
a{text-decoration: none;}
.nav ul li{
    
    width: 60px;
    height: 30px;
    float: left;
    text-align: center;
}
.nav ul li a{
    font-size: 14px;
    color: rgba(0,0,0,0.9);
}
.nav ul li a:hover{
    color: rgba(75, 221, 153, 0.438);
}
    .nav img{
        display: block;
        margin-left: 200px;
        width: 100px;
        height: 40px;
        margin-top: 10px;

    }

    #footer{
        width: 100%;
        height: 140px;
        bottom: 0;
        border-top: 1px solid rgba(0,0,0,0.6);
        background: white;
        position: relative;
        font-size: 14px;
        border-top: 1px solid rgba(0,0,0,0.4);
      }
      .fnav1{
        position: absolute;
        width: 500px;
        height: 30px;
        margin-left: -250px;
        margin-top: 30px;
        left: 50%;
        line-height: 30px;
      }
      .fnav1 ul li{
        float: left;
        margin-left: 50px;
      }
      .fnav1 img{
        width: 26px;
        height: 26px;
      }
      .fnav2{
        position: absolute;
        width: 730px;
        height: 20px;
    
        margin-left: -365px;
        margin-top: 80px;
        left: 50%;
      }
      .fnav2 ul li{
        float: left;
        margin-left: 80px;
      }
      .fnav2 ul li a{
        color: rgba(0,0,0,0.6);
      }
      .footercopy{
        position: absolute;
        width: 360px;
        height: 20px;
        margin-left: -180px;
        margin-top: 115px;
        left: 50%;
        letter-spacing: 2px;
        color: rgba(0,0,0,0.6);
        font-size: 11px;
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
   margin-top: 80px;
   margin-left: 840px;
   top: 20px;
   height: 400px;
 }
 .shop{
   position: absolute;
   top: 0;
   width: 300px;
   height: 200px;
   background: url(/imgs/112.png) center center no-repeat;
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
