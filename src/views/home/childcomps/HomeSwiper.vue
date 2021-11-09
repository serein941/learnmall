<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperList" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
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
.my-swipe img {
  width: 100%;
  height: 100%;
}
</style>