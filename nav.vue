<template>
  <div class="nav">
    <div class="cont">
      <img src="../assets/imgs/logo.png" alt="">
      <nav>
        <ul>
                <li>
                  <router-link to ='/home'>首页</router-link>
                </li>
                  <li>
                  <router-link to ='/discover'>发现</router-link>
                </li>
                  <li>
                  <router-link to ='/class'>风格</router-link>
                </li>
                <li>
                  <router-link to ='/about'>关于我们</router-link>
                </li>
              </ul>
      </nav>
      <div class="user">
        <img src="../assets/imgs/icons/我的.png" alt="">
        
        <h4><a @mouseenter="show()">{{name}}</a></h4>

        </div>

        <div class="users" v-show="showuser" @mouseleave="leave()">
          <router-link :to="{name:'user'}">个人中心</router-link><br/>
          <a @click="quit">退出登录</a>
        </div>
    </div>
  </div>
</template>

<script>
import { setCookie,getCookie,delCookie } from '../assets/js/cookie.js'
import '../assets/js/nav'

export default {
  name: 'tnav',
  data(){
            return{
                name: '',
                showuser:false
            }
        },
        mounted(){
            //页面挂载获取保存的cookie值，渲染到页面上
            let uname = getCookie('username')
            this.name = uname
            //如果cookie不存在，则跳转到登录页
            if(uname == ""){
                this.$router.push('/')
                // window.location.reload()//刷新当前页
               
            }
        },
        methods:{
            quit(){

                /*删除cookie*/
                delCookie('username')
            },
            show(){
                this.showuser=true;
            },
            leave(){
              this.showuser=false;
            }
        }
    }
 

</script>

<style scoped>
.nav{
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(1, 1, 1, 0.2);
  background-color: white;
  position: relative;
  z-index: 1;
}
.cont{
  width: 1200px;
  height: 60px;
  left: 50%;
  margin-left: -600px;
  position:absolute;

}
img{
  width: 160px;
  height: 80px;
  display: block;
  left: 100px;
}
nav{
  position: absolute;
  width: 350px;
 
   height: 40p;
   top: 40px;
   right: 0;
   }
ul li{
  text-align: center;
  list-style: none;
  float: left;
  width: 80px;
}

a {
  text-decoration: none;
  color:rgba(1, 1, 1, 0.59)
}
a:hover{
  border-bottom: 2px solid #42b983;
  color: #42b983
}
.nav-active{
  top: 0;
    position: fixed;  
}
.user{
  width: 150px;
  height: 30px;
 
  position: absolute;
  top: 35px;
  left: 1200px;
  font-size: 14px;
  line-height: 30px;
}
.user h4{
  font-size: 14px;
  font-weight: bold;
  display: inline;
  color: rgba(21, 179, 81, 0.59);
}
.user img{
  width: 25px;
  float: left;
  height: 25px;
  
}
.user{
  cursor: pointer;
}
.router-link-active{
  color: #42b983;
}
.users{
  text-align: center;
  border: 1px solid #42b983;
  border-radius: 2px;
  position: absolute;
  top: 20px;
  background:white;
  right: -150px;
  width: 70px;
  height: 35px;
  padding: 5px;
  font-size: 13px;
  font-weight: bold;
}

</style>
