<template>
  <div id="goods">
    <div class="goods-item" v-for="item in goodsList" :key="item.iid">
      <img :src="item.show.img" :key="item.show.img" alt="" />
      <div class="goods-info">
        <p>{{ item.title }}</p>
        <span class="price">¥{{ item.price }}</span>
        <span class="collect">{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Goods",
  props: {
    goodsList: {
      typeof: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#goods {
  display: flex;
  flex-wrap: wrap;
}
.goods-item {
  width: 50%;
  position: relative;
  padding-bottom: 40px;
}
.goods-item img {
  width: 100%;
}
.goods-info {
  text-align: center;
  font-size: 12px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -14px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>