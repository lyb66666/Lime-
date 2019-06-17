<template>
<div>
<div class="alert alert-warning" id="alert" role="alert">'提醒：交易请注意安全，请勿给他人随意透露账号密码，任何索要账号密码的行为均为骗子，请勿上当！'</div>
<div class="alert alert-success" id="alert1" role="alert" v-show="showsuccess">'温馨提示：您已支付成功'</div>
<div class="alert alert-success" id="alert4" role="alert" v-show="showclose">'温馨提示：您已取消支付'</div>
<div class="alert alert-warning" id="alert2" role="alert" v-show="showalert1">'温馨提示：您正在使用支付宝支付，交易请注意安全，请勿给他人随意透露账号密码，任何索要账号密码的行为均为骗子，请勿上当！'</div>
<div class="alert alert-warning" id="alert3" role="alert" v-show="showalert2">'温馨提示：您正在使用微信支付，交易请注意安全，请勿给他人随意透露账号密码，任何索要账号密码的行为均为骗子，请勿上当！'</div>

    <div id="zhifu">

                <div class="btn">
                    <div class="zhifubao" v-on:click="zhifubaoshow" >支付宝支付</div>
                    <div class="weixin" v-on:click="weixinshow" >微信支付</div>
                </div>
                
                <div id="zhifubaoye" v-show="show1">
                   
                    <p>请使用支付宝钱包扫码功能，扫描二维码</p>
                    <img src="../assets/imgs/二维码.png">
                    
                    <div class="btn1">
                          <div v-on:click="finished" >支付完成</div>
                            <div v-on:click="finished1" >取消支付</div>
                    </div>
                </div>
                <div id="weixinye" v-show="show2">
                   
                     <p>请使用微信钱包扫码功能，扫描二维码</p>

                     <img src="../assets/imgs/二维码.png">
                   
                    <div class="btn1">
                         <div v-on:click="finished" >支付完成</div>
                         <div v-on:click="finished1" >取消支付</div>
                    </div>
                </div>
                  </div>
</div>
</template>
<script>

export default {
    name:'paybtn',
    data(){
        return{
            show1:false,
            show2:false,
            showsuccess:false,
            showclose:false,
            showalert1:false
        }
        
    },
    methods:{
        zhifubaoshow(){
             this.show1 = true;
             this.show2 = false;
            this.showalert1=true
        },
        weixinshow(){
            this.show1=false;
            this.show2=true;
          this.showalert2=true
        },
        finished(){
            this.show1=false;
            this.show2=false;
            this.showsuccess=true
        },
        finished1(){
              this.show1=false;
                this.show2=false;
            this.showclose=true
        }

    }
}
</script>

<style scoped>
        #zhifu {
            margin-left: 150px;
            margin-top: 200px;
        }
        
        #zhifu ul li {
            list-style: none;
            line-height: 100px;
        }
        
        #zhifu .btn div {
            color: white;
            width: 200px !important;
            height: 50px !important;
            cursor: pointer !important;
            margin-top: 50px !important;
            padding-top: 15px;
            border-radius: 2%
        }
        
        #zhifu .btn .weixin {
            background-color: rgb(85, 235, 172)
        }
        
        #zhifu .btn .zhifubao {
            background-color: rgb(78, 195, 241);
        }
        
        #zhifu #zhifubaoye {
            width: 500px;
            height: 200px;
            border: 2px solid rgba(0, 0, 0, 0.315);
            position: relative;
            border-radius: 4px;
            margin-left: 450px;
            margin-top: -200px;
        }
        
        #zhifu #zhifubaoye p {
            position: absolute;
            margin-top: 50px;
            margin-left: 200px;
            font-size: 15px;
        }
        
        #zhifubaoye .logo {
            width: 30px;
            height: 30px;
            position: absolute;
            margin-top: 5px;
            margin-left: 5px;
        }
        
        #zhifubaoye img {
            width: 120px;
            height: 120px;
            position: absolute;
            margin-top: 50px;
            margin-left: 10px;
        }
        
        #zhifubaoye .btn1 {
            margin-left: 220px;
            margin-top: 100px;
        }
        
        #zhifubaoye .btn1 div {
            list-style: none;
            width: 100px;
            height: 30px;
            border-radius: 5%;
            display: inline-block;
            padding-left: 20px;
            margin-top: 30px;
            background-color: rgb(78, 196, 243);
            color: white;
            cursor: pointer;
        }
        
        #zhifu #weixinye {
            width: 500px;
            height: 200px;
            border: 2px solid rgba(0, 0, 0, 0.315);
            position: relative;
            border-radius: 4px;
            margin-left: 450px;
            margin-top: -200px;
        }
        
        #zhifu #weixinye p {
            position: absolute;
            margin-top: 50px;
            margin-left: 200px;
            font-size: 15px;
        }
        
        #weixinye .logo {
            width: 30px;
            height: 30px;
            position: absolute;
            margin-top: 5px;
            margin-left: 5px;
        }
        
        #weixinye img {
            width: 120px;
            height: 120px;
            position: absolute;
            margin-top: 50px;
            margin-left: 10px;
        }
        
        #weixinye .btn1 {
            margin-left: 220px;
            margin-top: 100px;
        }
        
        #weixinye .btn1 div {
            list-style: none;
            width: 100px;
            height: 30px;
            border-radius: 5%;
            display: inline-block;
            padding-left: 20px;
            margin-top: 30px;
            background-color: rgb(78, 196, 243);
            color: white;
            cursor: pointer;
        }
        
        #alert {
            position: absolute;
            width: 80%;
            margin-left: 200px;
            margin-top: -200px;
            animation-name: myshow;
            animation-duration: 4s;
            animation-fill-mode: forwards;
            -webkit-animation-name: myshow;
            -webkit-animation-duration: 6s;
            -webkit-animation-fill-mode: forwards;
        }
        
        @keyframes myshow {
            form {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
        
        #alert1 {
            position: absolute;
            width: 80%;
            margin-left: 200px;
            margin-top: -200px;
            animation-name: myshow1;
            animation-duration: 4s;
            animation-fill-mode: forwards;
            -webkit-animation-name: myshow1;
            -webkit-animation-duration: 6s;
            -webkit-animation-fill-mode: forwards;
        }
        
        @keyframes myshow1 {
            form {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
        
        #alert2 {
            position: absolute;
            width: 80%;
            margin-left: 200px;
            margin-top: -200px;
            animation-name: myshow2;
            animation-duration: 4s;
            animation-fill-mode: forwards;
            -webkit-animation-name: myshow2;
            -webkit-animation-duration: 6s;
            -webkit-animation-fill-mode: forwards;
        }
        
        @keyframes myshow2 {
            form {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
        
        #alert3 {
            position: absolute;
            width: 80%;
            margin-left: 200px;
            margin-top: -200px;
            animation-name: myshow3;
            animation-duration: 4s;
            animation-fill-mode: forwards;
            -webkit-animation-name: myshow3;
            -webkit-animation-duration: 6s;
            -webkit-animation-fill-mode: forwards;
        }
        
        @keyframes myshow3 {
            form {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
        
        #alert4 {
            position: absolute;
            width: 80%;
            margin-left: 200px;
            margin-top: -200px;
            animation-name: myshow3;
            animation-duration: 4s;
            animation-fill-mode: forwards;
            -webkit-animation-name: myshow4;
            -webkit-animation-duration: 6s;
            -webkit-animation-fill-mode: forwards;
        }
        
        @keyframes myshow4 {
            form {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
        
        .btn1 button {
            background-color: rgb(255, 255, 255) !important;
            border-radius: 5% !important;
            width: 100px !important;
            height: 30px !important;
            cursor: pointer !important;
        }

</style>
