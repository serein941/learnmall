<template>
  <div id="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#nav-bar {
  height: 44px;
  background-color: var(--color-tint);
  display: flex;
  justify-content: space-between;
  line-height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  z-index: 5;
}
.right,
.left {
  width: 60px;
}
.center {
  flex: 1;
}
.left img {
  margin-top: 10px;
}
</style>