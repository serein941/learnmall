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
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
};
</script>

TarBar

<style lang="scss" scoped>
@import "./assets/css/base.css";
</style>
