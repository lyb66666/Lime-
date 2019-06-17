<template>
  <div>
    <div id="body">
      <tnav></tnav>
      <div id="main">
        <img class="himg" v-bind:src="paths" alt>
        <h2 class="tip">{{tip}}</h2>

        <div class="head">
          <img class="uimg" v-bind:src="upaths" alt>
          <span>作者：{{name}}</span>
        </div>
        <p>{{text}}</p>

        <h4>{{t1}}</h4>
        <img class="simg" v-bind:src="pic1" alt>
        <p>{{text1}}</p>

        <h4>{{t2}}</h4>
        <img class="simg" v-bind:src="pic2" alt>
        <p>{{text2}}</p>

        <h4>{{t3}}</h4>
        <img class="simg" v-bind:src="pic3" alt>
        <p>{{text3}}</p>

        <h4>{{t4}}</h4>
        <img class="simg" v-bind:src="pic4" alt>
        <p>{{text4}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import tnav from "@/components/nav";

export default {
  name: "de",
  components: { tnav },
  created() {
    this.tip = this.$route.params.tip;
    this.name = this.$route.params.name;
    this.paths = this.$route.params.paths;
    this.upaths = this.$route.params.upaths;
    this.time = this.$route.params.time;
    this.pic1 = this.$route.params.pic1;
    this.pic2 = this.$route.params.pic2;
    this.pic3 = this.$route.params.pic3;
    this.pic4 = this.$route.params.pic4;
    this.text = this.$route.params.text;
    this.text1 = this.$route.params.text1;
    this.text2 = this.$route.params.text2;
    this.text3 = this.$route.params.text3;
    this.text4 = this.$route.params.text4;
    this.t1 = this.$route.params.t1;
    this.t2 = this.$route.params.t2;
    this.t3 = this.$route.params.t3;
    this.t4 = this.$route.params.t4;
    
  }
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  border: 0px;

}

#body {
  width: 100%;
  background-color: white;
  height: 100%;
  font-size: 16px;
  letter-spacing: 0.1em;
}
#main {
  width: 800px;
  margin: 40px auto 0;

  position: relative;
  overflow: hidden;
}

#article {
  margin-left: 20px;
  margin-top: 20px;
  padding: 10px;
  width: 700px;
  height: 360px;
  border: 1px solid rgba(0, 0, 0, 0.215);
  border-radius: 2px;
}

.tip {
  color: rgba(0, 0, 0, 0.7);
  letter-spacing: 3px;
}
.himg {
  width: 100%;
  height: 350px;
}
.uimg {
  float: left;
  width: 40px;
  height: 40px;
}
.simg
{
  width: 100%;
  height: 550px;
  margin: 15px 0px;
}
.head {
  margin: 10px 0;
  width: 150px;
  height: 40px;
  line-height: 40px;
}
.head span {
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
}
p {
  color: rgba(0, 0, 0, 0.8);
  display: block;
  margin: 5px 0;
}
</style>
