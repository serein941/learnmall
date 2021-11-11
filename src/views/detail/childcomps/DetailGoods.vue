<template>
  <div v-if="Object.keys(goods).length !== 0" id="goods-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    goods: {
      typeof: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#goods-info {
  padding: 0 10px;
  margin-bottom: 15px;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 15px;
}
.info-price .n-price {
  color: var(--color-high-text);
  font-size: 24px;
}
.info-price .o-price {
  text-decoration: line-through;
  font-size: 12px;
  color: #999;
  margin: 0 5px;
}
.info-price .discount {
  display: inline-block;
  width: 58px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  background-color: var(--color-high-text);
  border-radius: 10px;
  font-size: 12px;
  color: white;
  padding: 2px 5px;
  margin-bottom: 5px;
  position: relative;
  top: -8px;
}
.info-other {
  color: #999;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  line-height: 30px;
}
.info-service {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 20px 0;
}
.info-service .info-service-item img {
  width: 14px;
  height: 14px;
}
</style>