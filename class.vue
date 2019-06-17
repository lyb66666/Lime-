<template>
    <div>
        <tnav></tnav>
        <div id="main">
         
            <div id="ul">
                <ul id="style">
                    
                    <li>风格  ：</li>
                    <li @click="a()" :class="{active:shows==1}">
                        <router-link  :to="{name:'rixi'}">日系</router-link>
                    </li>
                    <li @click="b()" :class="{active:shows==2}">
                        <router-link  :to="{name:'gufeng'}">古风</router-link>
                    </li>
                    <li @click="c()" :class="{active:shows==3}"> 
                        <router-link  :to="{name:'xiaoyuan'}">校园</router-link>
                    </li>
                    <li @click="d()" :class="{active:shows==4}">
                        <router-link  :to="{name:'huaijiu'}">怀旧</router-link>
                    </li>
                    <li @click="e()" :class="{active:shows==5}">
                        <router-link  :to="{name:'cos'}">COS</router-link>
                    </li>
                    <li @click="f()" :class="{active:shows==6}">
                        <router-link  :to="{name:'yishu'}">欧美</router-link>
                    </li>
                    
                </ul> 
                <router-view/>
                
            </div>
       
           <foo></foo> 
        </div>    
       
    </div>
    
</template>
<script>
import rixi from '@/components/rixi'
import gufeng from '@/components/gufeng'
import xiaoyuan from '@/components/xiaoyuan'
import huaijiu from '@/components/huaijiu'
import cos from '@/components/cos'
import yishu from '@/components/yishu'


import tnav from '@/components/nav'
import foo from '@/components/footer'

export default {
    name:'class',
    components:{tnav,foo},
    data:function(){
        return {shows:1,photos:[]}
    }, 
    methods:
            {
                a()
                {
                    this.shows=1;

                },
                b()
                {
                    this.shows=2;
               
                },
                c()
                {
                    this.shows=3;

                },
                d()
                {
                    this.shows=4;

                },
                e()
                {
                    this.shows=5;

                },
                f()
                {
                    this.shows=6;

                }
            }
}
</script>

<style scoped>

#style li
{
    list-style: none;
    display: inline-block;
    margin-left: 8.4%;
    color:rgba(1, 1, 1, 0.59);
}
#style li a
{
    color:rgba(1, 1, 1, 0.59);
}
#style li a:hover
{
    color: rgb(77, 197, 77);
}
#main{
    width: 100%;
    height: 2200px;
    position: relative;
}

#main #ul #style
{
    position: relative;
    padding-left:200px; 
    margin-top: 50px; 
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(1, 1, 1, 0.164);
}
.active 
{
    color: rgb(77, 197, 77);
    font-weight: bolder;
}

</style>

