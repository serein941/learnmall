<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAline">
      <router-view />
    </keep-alive>
    <router-view v-else></router-view>
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
import MainTarBar from "components/common/tarbar/MainTarBar.vue";
export default {
  name: "App",
  components: { MainTarBar },
};
</script>

TarBar

<style lang="scss" scoped>
@import "./assets/css/base.css";
</style>
