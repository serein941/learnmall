<template>
  <nav-bar>
    <div slot="center">购物车({{ cartList }})</div></nav-bar
  >
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  computed: {
    ...mapGetters(["cartList"]),
  },
  components: { NavBar },
};
</script>

<style>
</style>