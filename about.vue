<template>
  <div>
    <router-view/>
    <tnav></tnav>
    <div id="content">
      <div id="content_1">
        <div id="content_1_1">
          <div id="content_bg">
          <p class="content-header">about us</p>

          <p id="about">
            青柠摄区，是四川大学锦城学院前端技术开发方向“前面端菜的小team”团队，创建供给整个四川高校约摄的一个平台。该平台吸引了很多
            拍照爱好者和摄影师的入住，拍得了很多美丽照片，留下了同学们很多难忘的瞬间，受到了广泛好评与关注。
            我们的制作团队不光在技术上处于行业前端，我们更注重将客户的产品表达的清楚与准确，我们大多是理科出身，在机械、游戏、电子、物理等各学科我们都有研究，能轻松理解客户的构思，所以我们能更好的将客户的意图表现出来。我们拥有自己的专业三维动画、建筑动画、虚拟现实和影视拍摄制作团队。
          </p>
        </div>

        <div id="content-animation">
          <div>
            <countTo :value="value1"></countTo>
            <p>访问量</p>
          </div>
          <div>
           <countTo :value="value2"></countTo>
            <p>交易量</p>
          </div>
          <div>
            <countTo :value="value3"></countTo>
            <p>创意作品</p>
          </div>
          <div>
            <countTo class="about2" :value="value4"></countTo>
            <span class="font-weight">%</span>
            <p>好评率</p>
          </div>
        </div>
        </div>
      </div>
      <div id="content-botton">

        <div class="content-btn1">
          <button
            id="bn2"
            type="button"
            class="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#myModal"
          >意见反馈</button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="myModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content" id="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="myModalLabel"></h4>
                </div>
                <div class="modal-body">
                  <div id="content-modal">
                    <p class="header_2">问题反馈</p>
                    <h4>WE WILL DO BETTER</h4>
                    <div id="modal-txtCon">
                      <textarea id="txtCon" placeholder="请描述你的问题..."></textarea>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" id="close" class="btn btn-default" data-dismiss="modal">关闭</button>
                  <button type="button" id="submit" class="btn btn-primary" style="background-color: rgba(75, 221, 153, 0.692);">提交</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="content-btn2">
          <button
            type="button"
            id="bn2"
            class="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#myModal2"
          >联系我们</button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="myModal2"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content modal-content2">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h6 class="modal-title" id="myModalLabel"></h6>
                </div>
                <div class="modal-body">
                
                  <img style="width:200px" src="../assets/imgs/公众号.png">
                </div>
                <div class="modal-footer">
                
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <router-view/>
    <foo></foo>
    </div>
    
  </div>
</template>

<script>
import tnav from "@/components/nav";
import foo from "@/components/footer";
// import modal from "@/components/dialog";
import countTo from '@/components/countTo'

import '../assets/js/bootstrap.min.js'

export default {
  name: "about",
  components: { tnav, foo,countTo },
  data() {
    return {
      value1: 432,
      value2: 230,
      value3: 322,
      value4: 98 ,
    };
  }
};
</script>

<style scoped>
@import '../assets/css/bootstrap.css';
*{
  padding: 0;
  margin: 0;

}
#content {
  background-color: white;
  height:800px ;
  position: relative;
}
.content-header { 
  text-align: center;
  font-size: 40px;
  color: rgb(248, 247, 246);
  font-weight: 700;
  margin-bottom: 40px;
  padding-top: 35px;
  display: block;
  
}

.font-weight {
  font-size: 30px;
  font-weight: 700;
}
#content_bg{
  height: 450px;
	background-color:rgba(0,0,0,0.8);
}
#content_1{
  margin-bottom: 30px;
  position: relative;
  width: 100%;
}
#content_1_1 {
  height: 450px;
 
	position: relative;
	background: url('../assets/imgs/about.jpg') no-repeat center center;
	background-size: cover;
	/* opacity: 0.4;  */
}
#content_1_1 li {
  width: 80px;
  height: 80px;
  background-color: white;
  list-style: none;
  border-radius: 50%;
  float: left;
  margin-left: 185px;
  margin-top: 90px;
}

#content-animation{
  width: 1200px;
  height: 40px;
  left: 50%;
  margin-left: -600px;
  position: relative;
  line-height: 40px;
}
#content-animation div {
  width: 110px;
  float: left;
  margin-left: 160px;
  position: relative;
  top: -220px;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 700px;
}

#about {
  font-size: 14px;
  margin-left: 100px;
  margin-right: 100px;
  text-indent: 30px;
  color: white;
}

.header_2 {
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
}

#content-botton {
  width: 1200px;
  height: 60px;

 
  line-height: 60px;
  left: 50%;
  margin-left: -600px;
  
  position:absolute;
 
}
.content-btn1{
  outline: none;
	width: 151px;
  float: left;
  margin-left: 400px;
  margin-top: -10px;
  text-align: center;
}
.content-btn2{
	width: 151px;
  float: left;
  margin-left:150px;
  margin-top: -10px;
  text-align: center;
}

#bn1{
   width: 150px;
  height: 40px;
  margin-bottom: 2px;
  border-radius: 2px;
	background: url('../assets/imgs/意见反馈.png') no-repeat center;
	background-size: 20%;
	background-position-x:10px;
  background-color: rgba(75, 221, 153, 0.692);
  font-size: 14px;
}
#bn2{
  width: 150px;
	height: 40px;
  margin-bottom: 2px;
  border-radius: 2px;
	background: url('../assets/imgs/意见反馈.png') no-repeat center;
	background-size: 20%;
	background-position-x:10px;	
  background-color: rgba(75, 221, 153, 0.692);
  font-size: 14px;
}




#content-modal h2 {
  margin-top: 20px;
  margin-bottom: 20px;
}
label {
  font-size: 16px;
  margin-left: 30px;
  cursor: pointer;
}
#modal-txtCon {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
#content_3 h4,
h5 {
  text-align: left;
}
#txtCon {
  width: 600px;
  height: 200px;
  border: 1px solid black;
}
#modal-content {
  width: 700px;
  height: 500px;
  margin-left: -350px;
  left: 50%;
}
.modal-content2 {
  height: 310px;
  width: 300px;
  margin-top: 150px;
  left: 50%;
  margin-left: -150px;
}
.modal-header{
  border: 0px;
}
.modal-footer {
  height: 80px;
}
#close{
  width: 100px;
  height: 30px;
  font-size: 14px;
  background-color: rgba(75, 221, 153, 0.692);
  color: white;
  margin-right: 18%;

}
#submit{
  width: 100px;
  height: 30px;
  font-size: 14px;
  background-color: rgba(75, 221, 153, 0.692);
    margin-right: 25%;
}
</style>

