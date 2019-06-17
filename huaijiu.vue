<template>
    <div id="d">
        <div id="weizhi" v-for="item of photos" :key='item'   >
            <div id="box" >
                <div id="box-content">
     
          <p class="title">{{item.text1}}</p>
        
          <div class="post">{{item.text2}}</div>
         </div>
                <img :src="item.pic" :width="item.width" :height="item.height"/> 
            </div>  
        </div>
    </div>
</template>

<script>

export default {
    name:'rixi',
    data(){return{photos:[]}},
     created()
        {
            var that = this;
            this.$axios.get("http://localhost:3000/huaijius").then(response =>{
                console.log(response);
                that.photos = response.data;
            }).catch(err => {
                console.log(err);
            })
        }
};
</script>
<style scoped>
@import '../assets/css/bootstrap-grid.min.css';
 
    #weizhi:nth-child(1)
    {
        position: absolute;
        left: 100px;
        top: 20px;
    }
    #weizhi:nth-child(2)
    {
        position: absolute;
        left: 400px;
        top: 20px;
    }
    #weizhi:nth-child(3)
    {
        position: absolute;
        left: 100px;
        top: 450px;
    }
    #weizhi:nth-child(4)
    {
        position: absolute;
        left: 800px;
        top: 400px;
    }
    #weizhi:nth-child(5)
    {
        position: absolute;
        left: 630px;
        top: 840px;
    }
    #weizhi:nth-child(6)
    {
        position: absolute;
        left: 100px;
        top: 840px;
    }
      #d
    {
        position: relative;
        top: 30px;
        left: 30px;
        width: 1280px;
        margin: auto;
    }
    #box
    {

        border-radius: 2px;
        cursor: pointer;
    }
     #box{
		overflow: hidden;
		position: relative;
	}
	#box:before{
		content: "";
		width: 100%;
		height: 100%;
		background: #000;
		padding: 14px 18px;
		position: absolute;
		top: 0;
		left:100%;
		opacity: 0;
		transition: all 500ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
	}
	#box:hover:before{
		width: 100%;
		left:0;
		opacity: 0.5;
	}
	#box img{
    border-radius: 2px;
		
	}
	#box #box-content{
		padding: 14px 18px;
		color: #fff;
		position: absolute;
		top: 10%;
    left: 0;
	}
	#box .title{
		font-size: 25px;
		font-weight: 600;
    line-height: 30px;
    color: white;
    border-bottom:  2px solid white;
    padding-bottom: 5px;
		text-transform: uppercase;
		margin: 0;
		opacity: 0;
		transition: all 0.5s ease 0s;
	}
	#box .post{
    font-size: 15px;
    color: white;
		text-transform: capitalize;
		opacity: 0;
		transition: all 0.5s ease 0s;
	}
	#box:hover .title,
	#box:hover .post{
		opacity: 1;
		transition-delay: 0.7s;
	}

</style>