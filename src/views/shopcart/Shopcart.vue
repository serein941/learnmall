<template>
  <div id="shopcart">
    <shopcart-nav-bar></shopcart-nav-bar>
    <scroll class="wrapper" :click="true" ref="scroll">
      <shopcart-item></shopcart-item>
    </scroll>
    <shopcart-bottom-bar></shopcart-bottom-bar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Scroll from "../../components/common/scroll/scroll.vue";
import ShopcartBottomBar from "./childcomps/ShopcartBottomBar.vue";
import ShopcartItem from "./childcomps/ShopcartItem.vue";
import ShopcartNavBar from "./childcomps/ShopcartNavBar.vue";

export default {
  components: { ShopcartNavBar, Scroll, ShopcartItem, ShopcartBottomBar },
  name: "Shopcart",
  data() {
    return {
      isShow: null,
    };
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapState(["cartList"]),
  },
  methods: {},
};
</script>

<style scoped>
#shopcart {
  position: relative;
  height: 100vh;
}
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 98px;
  overflow: hidden;
}
</style>