<template>

 <span ref="numberGrow" :data-time="time" class="number-grow" :data-value="value">0</span>

</template>
<script>
export default {
 props: {
  time: {
   type: Number,
   default: 3
  },
  value: {
   type: Number,
   default: 720000
  }
 },
 methods: {
  numberGrow (ele) {
   let _this = this
   let step = (_this.value * 10) / (_this.time * 1000)
   let current = 0
   let start = 0
   let t = setInterval(function () {
    start += step
    if (start > _this.value) {
     clearInterval(t)
     start = _this.value
     t = null
    }
    if (current === start) {
     return
    }
    current = start
    ele.innerHTML = parseInt(start);
   }, 10)
  }
 },
 mounted () {
  this.numberGrow(this.$refs.numberGrow)
 }
}
</script>
<style>
.number-grow-warp{
 transform: translateZ(0);
}
.number-grow {
  font-size: 36px;
  color: white;
  font-weight: 700

}
</style>