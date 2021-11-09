<template>
  <div id="tarbar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#tarbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
  background-color: #fff;
  z-index: 5;
}
</style>