<template>
  <div class="body">
    <div class="cont lo" v-show="showLogin">
      <form action>
        <header>
          <h3>欢迎登陆</h3>
        </header>
        <p class="showmsg" v-show="showmsg">{{msg}}</p>
        <div class="input">
          <label for="names">昵称</label>
          <input type="text" v-model="username" id="names" placeholder="name">
        </div>
        <div class="input">
          <label for="pas">密码</label>
          <input type="password" v-model="password" id="pas" placeholder="password">
        </div>
        <footer>
        </footer>
        <input type="button" value="登录" @click="login">

        <footer>
          <h3>
            <span>没有账户?</span>
            <a href="#" @click="showR">注册</a>
          </h3>
        </footer>
      </form>
    </div>

    <div class="cont re" v-show="showRegister">
      <form name="from1">
        <header>
          <h3>欢迎注册</h3>
        </header>
        <p class="showmsg" v-show="showmsg">{{msg}}</p>
        <div class="input">
          <label for="name">昵称</label>
          <input v-model="username" name="username" type="text" placeholder="name">
          <p class="warn">{{namemsg}}</p>
        </div>
        <div class="input">
          <label for="pas">密码</label>
          <input v-model="password" name="password" type="password" placeholder="password">
          <p class="warn1">{{pasmsg}}</p>
        </div>
        <div class="input">
          <label for="email">邮箱</label>
          <input v-model="email" type="text" placeholder="email">
          <p class="warn2">{{emailmsg}}</p>
        </div>
        <input type="button" value="注册" @click="register">

        <footer>
          <h3>
            <span>已有账户?</span>
            <a href="#" @click="showL" id="btndata">登录</a>
          </h3>
        </footer>
      </form>
    </div>
    <div id="footer">&copy;青柠摄区 | 粤ICP备091123434号-2 | CC BY-NY 4.0</div>
  </div>
</template>
<script>
import { setCookie, getCookie } from "../assets/js/cookie";
export default {
  name: "login",
  data() {
    return {
      showLogin: true,
      showRegister: false,
      username: "",
      password: "",
      email: "",
      msg: "",
      showmsg: false,
      namemsg: "",
      pasmsg: "",
      emailmsg: ""
    };
  },
  mounted() {
    //页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录
    if (getCookie("username")) {
      this.$router.push("/user");
    }
  },

  methods: {
    showR() {
      (this.showLogin = false),
        (this.showRegister = true),
        (this.showmsg = false);
    },
    showL() {
      (this.showLogin = true),
        (this.showRegister = false),
        (this.showmsg = false);
    },
    checkname() {
      if (this.username == "") {
        this.namemsg = "用户名不能为空";return false;
      } else if (this.username.length < 2 || this.username.length > 4) {
        this.namemsg = "用户名长度在2-4个字符间";return false;
      } else {
        this.namemsg = "";
        return true;
      }
     
    },
    checkpsd() {
      var pwdReg = /^[a-zA-Z0-9]{6,10}$/;
      // var passwords=document.form1.password.value;
      if (this.password == "") {
        this.pasmsg = "密码不能为空";return false;
      } else if (!pwdReg.exec(this.password)) {
        this.pasmsg = "密码不能含有非法字符，长度在6-10之间";return false;
      } else {
        this.pasmsg = "";
        return true;
      }
      
    },
    checkemail() {
      var regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.email == "") {
        this.emailmsg = "请输入邮箱";return false;
      } else if (!regEmail.test(this.email)) {
        this.emailmsg = "邮箱格式不正确";return false;
        
        
      }else{
          return true;
      }
      
    },
    register() {
      this.checkname();
      this.checkpsd();
      this.checkemail();
      if (this.checkname() && this.checkpsd() && this.checkemail()) {
        this.reg();
        
      } else {
        return false;
      }
    },
    login() {
      let data = { username: this.username, password: this.password };
      this.$http.post("/api/users/selectUser", data).then(res => {
        console.log(res);
        //接口的传值是(-1,该用户不存在),(0,密码错误)
        if (res.data == -1) {
          this.msg = "用户名或密码错误";
          this.showmsg = true;
        } else if (res.data == 0) {
          this.msg = "用户名或密码错误";
          this.showmsg = true;
        } else {
          this.msg = "登录成功";
          this.showmsg = false;
          setCookie("username", this.username, 1000 * 60);
          setTimeout(
            function() {
              this.showmsg = false;
              this.$router.push("/home");
              //window.history.back()
            }.bind(this),
            1000
          );
        }
      });
    },

    reg() {
      let data = {
        username: this.username,
        password: this.password,
        email: this.email
      };
      this.$http.post("/api/users/addUser", data).then(res => {
        console.log(res);
        /*接口的传值是(-1,该用户已存在)*/
        if (res.data == -1) {
          this.msg = "该账号已存在";
          this.showmsg = true;
          this.username = "";
          this.password = "";
          this.email = "";
        } else if (res.status == 200) {
          this.msg = "注册成功";
          this.showmsg = true;
          this.username = "";
          this.password = "";
          this.email = "";
          /*注册成功之后再跳回登录页*/
          setTimeout(
            function() {
              this.showRegister = false;
              this.showLogin = true;
              this.$router.push("/");
              this.showmsg = false;
            }.bind(this),
            1000
          );
        }
      });
    }
  }
};
</script>
<style scoped>
.body {
  width: 100%;
  height: 800px;
  position: absolute;

  background: url(../assets/imgs/logbg.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}

.cont {
  padding: 20px 0 0;
  width: 300px;
  height: 350px;

  position: relative;
  margin: 180px auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgba(68, 66, 66, 0.671);
}

header h3 {
  margin: 30px 0 40px;
  font-size: 18px;
  color: rgb(70, 223, 172);
  text-align: center;
}
label {
  font-size: 13px;
}
input.invalid:-ms-input-placeholder {
  color: rgb(70, 223, 172);
}

input.invalid::-webkit-input-placeholder {
  color: rgb(70, 223, 172);
}
.input {
  width: 240px;
  height: 40px;
  margin: 10px auto;
  line-height: 40px;
}
input {
  width: 180px;
  height: 30px;
  margin: 0 0 0 5px;
  border-radius: 5px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
}
.warn {
  width: 130px;
  height: 20px;
  line-height: 20px;
  color: rgb(70, 223, 172);
  top: 150px;
  position: absolute;
  left: 70px;
  font-size: 9px;
  display: block;
}
.warn1 {
  width: 190px;
  height: 20px;
  line-height: 20px;
  color: rgb(70, 223, 172);
  top: 200px;
  position: absolute;
  left: 70px;
  font-size: 9px;
  display: block;
}
.warn2 {
  width: 190px;
  height: 20px;
  line-height: 20px;
  color: rgb(70, 223, 172);
  top: 250px;
  position: absolute;
  left: 70px;
  font-size: 9px;
  display: block;
}
input:focus {
  border: 1px solid rgb(70, 223, 172);
}
footer span a {
  font-size: 12px;
  color: rgb(70, 223, 172);
  margin-left: 215px;
}
input[type="button"] {
  width: 238px;
  height: 32px;
  color: rgba(255, 255, 255);
  background-color: rgb(70, 223, 172);
  border: none;
  position: absolute;
  margin-left: -119px;
  left: 50%;
  margin-top: 10px;
  transition: background-color 0.5s;
}
input[type="button"]:hover {
  background-color: rgb(70, 223, 172, 0.7);
}
footer h3 {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  margin: 80px 95px;
}

footer a {
  color: rgb(70, 223, 172);
}
#footer {
  width: 100%;
  height: 30;
  text-align: center;
  line-height: 30px;
  color: white;
  font-size: 13px;
  position: fixed;
  letter-spacing: 2px;
  bottom: 10px;
}
.showmsg {
  display: block;
  width: 150px;
  height: 20px;
  font-size: 12px;
  margin-left: 30%;
  margin-top: -10%;
  position: absolute;
}
.lo{
  animation: mymove 2s ease;
 
}
@keyframes mymove {
 0%{
			opacity: 0.2;
			transform: translateY(-50%);
		}
		/* 20%{
			opacity: 0.5;
			transform: translateX(-40%);
		} */
		100%{
			opacity: 1;
			transform: translateY(0);
		}
  
}
.re{
  animation: mymove1 2s ease;
 
}
@keyframes mymove1 {
 0%{
			opacity: 0.2;
			transform: translateY(50%);
		}
		/* 20%{
			opacity: 0.5;
			transform: translateX(40%);
		} */
		100%{
			opacity: 1;
			transform: translateY(0);
		}
  
}
</style>
