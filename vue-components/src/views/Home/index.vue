<template>
  <div class="home">
    <h2 class="home__top">
      首页
    </h2>
    <div class="home__menu">
      <div class="home__menu-item" v-for="item in menuList" :key="item.id" @click="toPage(item.router)">
        <div class="item-router">{{ item.title }}</div>
        <i class="el-icon-arrow-right item-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  /**
  * @param {Array} menuList 列表数据
  */
  data () {
    return {
      menuList: [
        {
          id: 1,
          title: '点聚式菜单',
          router: 'djmenu'
        }
      ]
    }
  },

  methods: {
    /**
    * @description: 跳转页面
    * @param {String} router 页面路由name
    * @return: null
    */
    toPage (router) {
      this.$router.push({ name: router })
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100vw;
  height: 100vh;
  &__top{
    height: 130px;
    line-height: 130px;
    text-align: center;
    background-image: url('~@/assets/images/backgroundimg.jpg');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
  }
  &__menu{
    height: calc(100vh - 130px);
    overflow-y: scroll;
    &-item{
      padding: 0 12px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #EEEEEE;
      display: flex;
      .item-router{
        display: block;
        width: calc(100vw - 50px);
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .item-icon{
        line-height: 39px;
      }
    }
  }
}
</style>
