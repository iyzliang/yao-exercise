<template>
  <div class="menu">
    <div class="menu__btn-home">
      <i class="el-icon-house"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myMenu'
}
</script>

<style lang="scss" scoped>
.menu{
  display: flex;
  height: 40px;
  background-color: #FFFFFF;
  box-shadow: 10px 10px 20px #cccccc;
  &__btn-home{
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    &:hover{
      opacity: 0.6;
    }
  }
}
</style>
