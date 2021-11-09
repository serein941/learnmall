<template>
  <div id="tar-bar-item" @click="ToClick()">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TarBarItem",
  props: {
    //  父组件传入的路由
    path: {
      typeof: String,
    },
    //  父组件传入的颜色
    color: {
      typeof: String,
      default: "deeppink",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive === true ? { color: this.color } : {};
    },
  },
  methods: {
    ToClick() {
      if (this.$route.path !== this.path) {
        this.$router.push(this.path);
      }
    },
  },
};
</script>

<style scoped>
#tar-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
#tar-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 5px;
}
.active {
  color: deeppink;
}
</style>