<template>
    <div>
    <section>
                    <img v-bind:src="info.paths" alt="">
                    <div class="imgwords">
                    <header>
                        <h4>约拍精选</h4>
                    </header>
                    <p>{{info.words}}</p>
                    <h5>摄影师-{{info.name}}</h5><span>摄于{{info.time}}</span></div>
                </section>
                
                 </div>
</template>
<script>
export default {
    name:'top',
      props:['info'],
    // data(){
    //     return{
    //         link:`home/${this.info.name,this.info.paths}`};
    //     },
}
</script>
<style scoped>
section h4{
    display: block;
    width: 65px;
    padding-top: 4px;
    font-size: 15px;
    margin-top: 50px;
    color: rgba(0,0,0,0.4);
    border-top:2px solid rgba(0,0,0,0.4); 
}
section p{
    display: block;
    width: 220xp;
    margin-top: 20px;
    font-size: 13px;
}
section h5{
    display: block;
    margin-top: 35px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.603);
}
section span{
    display: block;
    font-size: 10px;
    color: rgba(0,0,0,0.6);
    width: 200px;
    letter-spacing: 2px;
    margin-left: 180px;
    margin-top: -15px;
}
.imgwords{
    width: 280px;
    height: 160px;
    position: absolute;
    top: 10px;
    right: 0px;
    
}
section{
    margin-bottom: 20px;
    padding: 10px;
    position: relative;
    border-bottom:1px solid rgba(163, 156, 156, 0.5);

}
section img{
    border-radius: 4px;
    width: 250px;
    height: 170px;
}
section img:hover{
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.288);
}
</style>
