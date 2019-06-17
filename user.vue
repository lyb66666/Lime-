<template>
  <div id="body">
    <tnav></tnav>

    <div id="body">
      <div id="main">
        <div id="two">
          <div id="up">
            <img src="../assets/imgs/user3.png">
            <div id="twotext1">
              <h4>昵称：{{name}}</h4>
              <p>擅长风格：旅游摄影、风景摄影、人像摄影、活动摄影、HDR摄影</p>
              <p>个性签名：如梦如幻月，若即若离花</p>
            </div>
          </div>
          <div id="middle">
            
            <p>摄影设备：索尼I-7000</p>
          </div>
        </div>

        <div id="three">
          <p style="text-align:center">个人作品</p>
          <img src="../assets/fimg/1.jpg">
          <img src="../assets/fimg/2.jpg">
          <img src="../assets/fimg/9.jpg">
          <img src="../assets/fimg/4.jpg">
          <img src="../assets/fimg/6.jpg">
          <img src="../assets/fimg/8.jpg">
        </div>
      </div>
      <foo></foo>
    </div>
  </div>
</template>
<script>
import tnav from "@/components/nav";
import foo from "@/components/footer";
import { setCookie, getCookie, delCookie } from "../assets/js/cookie.js";
export default {
  name: "discover",
  components: { tnav, foo },
  data() {
    return {
      name: ""
    };
  },
  mounted() {
    //页面挂载获取保存的cookie值，渲染到页面上
    let uname = getCookie("username");
    this.name = uname;
    //如果cookie不存在，则跳转到登录页
    if (uname == "") {
      this.$router.push("/");
      // window.location.reload()//刷新当前页
    }
  }
};
</script>
<style scoped>
#body {
  width: 100%;
  height: 1100px;
  position: absolute;
  overflow: hidden;
  /*   background-color: cornflowerblue;*/
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}

#main {
  width: 1200px;
  height: 1000px;
  margin: 0 auto 20px;
  top: 30px;
  position: relative;
  overflow: hidden;
  /*background-color: beige*/
}
#two {
  height: 200px;
  background-color: rgba(153, 153, 153, 0.322);
}
#two img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  float: left;
  margin-left: 120px;
  margin-top: 50px;
}
#twotext1 {
  float: left;
  font-weight: 400;
  font-size: 15px;
  color: rgba(65, 66, 66, 0.733);
  width: 900px;
  margin-top: 65px;
  margin-left: 25px;
  line-height: 20px;
}
#middle {
  float: left;
  width: 300px;
  margin-top: 20px;
  margin-left: 25px;
  line-height: 35px;
  font-size: 15px;
  color: rgba(65, 66, 66, 0.733);
}
#b1 {
  float: left;
  margin-left: -100px;
  background-color: rgb(39, 189, 151);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#b2 {
  float: left;
  margin-left: 700px;
  background-color: rgb(39, 189, 151);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#three {
  color: rgba(65, 66, 66, 0.733);
  font-weight: bold;
  margin: 100px auto;
  padding: 10px 0;
  border-top: 1px solid rgba(65, 66, 66, 0.233);
  height: 500px;
  /*background-color: aquamarine;*/
  
}
#three img {
  width: 300px;
  height: 200px;
  margin-left: 60px;
  margin-top: 40px;
  box-shadow: 0px 5px 8px 0px #999;
}
</style>
