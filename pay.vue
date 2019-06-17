<template>
    <div>
        <router-view/>
        <tnav></tnav>
       <div id="banner">
        <div class="order">
        <header>青柠摄影|收银台</header>
        <span>预约摄影师:呦呦</span><span class="s">联系方式:18390220382</span><span class="s">订单<h3>130.00</h3>元</span>
        </div>
        </div>
        <router-view/>
        <paybtn></paybtn>
        <foo></foo>
    </div>
</template>

<script>
import tnav from '@/components/nav'
import paybtn from '@/components/paybtn'
import foo from '@/components/footer'
export default {
    name:'pay',
    components:{tnav,paybtn,foo}, 
}
</script>


<style scoped>

#banner {
    position: absolute;
     margin-top: 20px;
     padding: 10px;
    width: 1200px;
    margin-left: -600px;
    left: 50%;
    height: 130px;
    background-color: rgba(153, 153, 153, 0.322);
}
.order{
    padding-left: 100px;
    width: 1200px;
    height: 100px;
    left: 50%;
    margin-left: -600px;
    margin-top: -150px;
    margin: auto;
} 
.order header{
    font-size: 24px;
    padding-bottom: 10px;
}
.order h3{
    display: inline;
    margin-top: -15px;
}
.order span{
    float: left;
    display: block;
    margin-top:20px ;
    font-size: 14px;
    margin-right: 20px;
}

</style>
