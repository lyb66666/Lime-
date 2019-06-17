<template>
   <div id="footer">
            <div class="fnav1">
            <ul>
                <li><a class="qq" href="javascript:"><img src="../assets/imgs/icons/qq.png"></a></li>
                <li> <a class="weixin" href="javascript:"><img src="../assets/imgs/icons/微信.png"></a></li>
                <li><img src="../assets/imgs/icons/微博 (1).png"></li>
                <li><img src="../assets/imgs/icons/邮箱 .png"></li>
                <li><img src="../assets/imgs/icons/推特.png"></li>
            </ul>
        </div>
        <div class="fnav2">
            <ul>
                <li><a href="#">支持我们</a></li>
                <li><a href="#">商家招募</a></li>
                <li><a href="#">用户协议</a></li>
                <li><a href="#">联系我们</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
        <div class="footercopy"> &copy;青柠摄区 | 粤ICP备091123434号-2 | CC BY-NY 4.0</div>
        </div>

</template>
<script>
export default{
    name:'footers'
};

</script>

<style scoped>
#footer{
    width: 100%;
    height: 140px;
    bottom: 0;
    color: aliceblue;
    position: absolute;
    font-size: 14px;
    border-top: 1px solid rgba(0, 0, 0, 0.205);
    border-bottom: 1px solid rgba(0, 0, 0, 0.205);
    z-index: 10px;
}
.fnav1{
    position: absolute;
    width: 450px;
    height: 30px;
    margin-left: -225px;
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
    width: 780px;
    height: 20px;
    margin-left: -390px;
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
/*二维码样式*/

 .weixin{
    position:relative;
  }
 .weixin::after{
   content: url(../assets/imgs/公众号.png);
   position: absolute;
   right: -10px;
   top: -210px;
   z-index: 99;
   width:100px;
   height: 100px;
   border-radius: 4px;
   transform-origin: top right;
   transform: scale(0);
   opacity: 0;
   -webkit-transition: all .4s ease-in-out;
   -o-transition: all .4s ease-in-out;
   transition: all .4s ease-in-out;
 }
 .weixin:hover::after{
    transform:scale(1);
    opacity: 1;
  }

  .qq{
    position:relative;
  }
  
 .qq::after{
   content: url(../assets/imgs/qq.jpg);
   position: absolute;
   right: -20px;
   top: -180px;
   z-index: 99;
   width:100px;
   border: 1px solid rgba(0, 0, 0, 0.233);
   height: 100px;
   border-radius: 4px;
   transform-origin: top right;
   transform: scale(0);
   opacity: 0;
   -webkit-transition: all .4s ease-in-out;
   -o-transition: all .4s ease-in-out;
   transition: all .4s ease-in-out;
 }
 .qq:hover::after{
    transform:scale(1);
    opacity: 1;
  }

</style>