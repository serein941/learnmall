<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tar-bar v-if="$route.meta.istarbar"></main-tar-bar>
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
