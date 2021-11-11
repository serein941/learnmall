<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: {
      typeof: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.my-swipe {
  height: 310px;
  overflow: hidden;
}
.my-swipe img {
  width: 100%;
}
</style>