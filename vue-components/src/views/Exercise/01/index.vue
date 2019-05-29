<template>
  <div class="djmenu">
    <div class="aside-nav">
      <transition name="open1">
        <div v-if="menuStatus" class="nav-1">1</div>
      </transition>
      <transition name="open2">
        <div v-if="menuStatus" class="nav-2">2</div>
      </transition>
      <transition name="open3">
        <div v-if="menuStatus" class="nav-3">3</div>
      </transition>
      <div class="nav-bth" @click="openMenu">😁</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'djmenu',

  data () {
    return {
      menuStatus: false
    }
  },

  methods: {
    openMenu () {
      this.menuStatus = !this.menuStatus
    }
  }
}
</script>

<style lang="scss" scoped>
$time: .3s;
$timing: ease-out;
.open1-enter-active{
  animation: animation-open-1 $time;
}
.open1-leave-active{
  animation: animation-open-1 $time reverse;
}
@keyframes animation-open-1 {
  0% {left: 75px; bottom: -25px; width: 30px; height: 30px; opacity: 0;}
  100% {left: 75px; bottom: 75px;}
}
.open2-enter-active{
  animation: animation-open-2 $time;
}
.open2-leave-active{
  animation: animation-open-2 $time reverse;
}
@keyframes animation-open-2 {
  0% {left: 75px; bottom: -25px; width: 30px; height: 30px; opacity: 0;}
  100% {left: 5px; bottom: 45px;}
}
.open3-enter-active{
  animation: animation-open-3 $time;
}
.open3-leave-active{
  animation: animation-open-3 $time reverse;
}
@keyframes animation-open-3 {
  0% {left: 75px; bottom: -25px; width: 30px; height: 30px; opacity: 0;}
  100% {left: -25px; bottom: -25px;}
}
.djmenu{
  background-color: #666699;
  position: relative;
  .aside-nav{
    width: 100px;
    height: 100px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    .yuan{
      height: 50px;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
      text-align: center;
      line-height: 50px;
      position: absolute;
    }
    .nav-bth{
      background-color: #00796b;
      left: 75px;
      bottom: -25px;
      @extend .yuan;
    }
    .nav-1{
      background: #00CC66;
      left: 75px;
      bottom: 75px;
      @extend .yuan;
    }
    .nav-2{
      background: #00CC66;
      left: 5px;
      bottom: 45px;
      @extend .yuan;
    }
    .nav-3{
      background: #00FF33;
      left: -25px;
      bottom: -25px;
      @extend .yuan;
    }
  }
}
</style>
