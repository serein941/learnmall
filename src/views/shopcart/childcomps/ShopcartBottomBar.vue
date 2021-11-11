<template>
  <div id="cart-bar">
    <van-submit-bar :price="totalPrice" button-text="提交订单">
      <div slot="default" class="main">
        <div class="select" @click="cheakedBtn">
          <div v-show="isChecked"><img src="~/assets/img/cart/tick.svg" /></div>
        </div>
        <div>全选</div>
      </div>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    ...mapState(["cartList"]),
    totalPrice() {
      // vant组件库中提交订单栏价格单位为分
      return (
        this.cartList
          .filter((item) => item.checked)
          .reduce((preValue, item) => {
            return preValue + item.count * item.newPrice;
          }, 0) * 100
      );
    },
    isChecked() {
      return this.cartList.every((item) => {
        return item.checked === true;
      });
    },
  },
  methods: {
    cheakedBtn() {
      if (this.isChecked === true) {
        this.cartList.forEach((item) => {
          return (item.checked = false);
        });
      } else {
        this.cartList.forEach((item) => {
          return (item.checked = true);
        });
      }
    },
  },
};
</script>

<style scoped>
.van-submit-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
}
.main {
  display: flex;
  margin-top: 3px;
}
.select {
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.select img {
  background-color: var(--color-high-text);
  border-radius: 50%;
}
</style>