<template>
  <div id="recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      typeof: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#recommend {
  display: flex;
  justify-content: space-between;
  padding: 10px 0 20px;
  font-size: 12px;
  text-align: center;
  border-bottom: 10px solid #ddd;
}
.recommend-item {
  width: 25%;
}
.recommend-item img {
  width: 94%;
  padding-bottom: 5px;
}
</style>