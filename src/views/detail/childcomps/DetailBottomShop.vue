<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-icon icon="cart-o" text="购物车" :badge="cartList" />
    <van-goods-action-icon icon="shop-o" text="店铺" />
    <van-goods-action-button
      text="加入购物车"
      type="warning"
      @click="addCart()"
    />
    <van-goods-action-button color="red" text="立即购买" />
  </van-goods-action>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style>
</style>