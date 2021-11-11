<template>
  <div id="cart">
    <div
      class="cart-item"
      cart-item
      v-for="(item, index) in cartList"
      :key="index"
    >
      <div class="cart-select" @click="buttonClick(index)">
        <div v-show="item.checked">
          <img src="~/assets/img/cart/tick.svg" />
        </div>
      </div>
      <div class="cart-img"><img :src="item.imgURL" alt="" /></div>
      <div class="cart-text">
        <div class="text-item1">{{ item.title }}</div>
        <div class="text-item2">商品描述:{{ item.desc }}</div>
        <div class="text-price">
          <span>￥{{ item.newPrice }}</span>
          <span>X{{ item.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {},
  computed: {
    ...mapState(["cartList"]),
  },
  methods: {
    buttonClick(index) {
      this.cartList[index].checked = !this.cartList[index].checked;
    },
  },
};
</script>

<style scoped>
.cart-item {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.cart-select {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #ddd;
  margin-top: 32px;
}
.cart-select > div > img {
  background-color: var(--color-high-text);
  border-radius: 50%;
}
.cart-img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
}
.cart-item img {
  width: 100%;
}
.cart-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-text .text-item1,
.cart-text .text-item2 {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.cart-text .text-item1 {
  font-weight: bolder;
  font-size: 14px;
}
.cart-text .text-item2 {
  font-size: 12px;
}
.cart-text .text-price {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.cart-text .text-price span:nth-child(1) {
  color: var(--color-high-text);
}
.cart-text .text-price span:nth-child(2) {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  box-sizing: content-box;
  font-size: 12px;
}
</style>