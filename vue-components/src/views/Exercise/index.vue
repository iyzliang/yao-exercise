<template>
  <div class="exercise">
    <my-menu></my-menu>
    <router-view class="exercise-main"></router-view>
  </div>
</template>

<script>
import myMenu from '@/components/Menu/index'

export default {
  name: 'exercise',

  components: {
    myMenu
  }
}
</script>

<style lang="scss" scoped>
.exercise{
  width: 100vw;
  height: 100vh;
  .exercise-main{
    height: calc(100vh - 40px);
  }
}
</style>
