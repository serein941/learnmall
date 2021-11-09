<template>
  <div>
    <tar-bar>
      <tar-bar-item path="/home">
        <img slot="icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img slot="icon-active" src="~assets/img/tabbar/home_active.svg" />
        <div slot="text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/category">
        <img slot="icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img slot="icon-active" src="~assets/img/tabbar/category_active.svg" />
        <div slot="text">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/shopcart">
        <img slot="icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img slot="icon-active" src="~assets/img/tabbar/shopcart_active.svg" />
        <div slot="text">购物车</div>
      </tar-bar-item>
      <tar-bar-item path="/profile">
        <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img slot="icon-active" src="~assets/img/tabbar/profile_active.svg" />
        <div slot="text">我的</div>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from "./TarBar.vue";
import TarBarItem from "./TarBarItem.vue";

export default { components: { TarBar, TarBarItem } };
</script>

<style scoped>
</style>