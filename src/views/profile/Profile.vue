<template>
  <div id="profile">
    <nav-bar><div slot="center">我的商城</div></nav-bar>
    <profile-user></profile-user>

    <div class="accout">
      <div class="accout-item">
        <div class="item-number"><span>0.00</span>元</div>
        <div class="item-text">我的余额</div>
      </div>
      <div class="accout-item">
        <div class="item-number"><span>0</span>个</div>
        <div class="item-text">我的优惠</div>
      </div>
      <div class="accout-item">
        <div class="item-number"><span>0</span>分</div>
        <div class="item-text">我的积分</div>
      </div>
    </div>

    <!--3.封装成一个整体-->
    <list-view></list-view>
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import ProfileUser from "./childcompos/ProfileUser.vue";

import ListView from "./childcompos/ListView.vue";
export default {
  components: { NavBar, ProfileUser, ListView },
  name: "Profile",
  data: function () {
    return {
      orderList: [
        { icon: "#order", iconColor: "#ff8198", info: "我的消息" },
        { icon: "#point", iconColor: "#fc7b53", info: "积分商城" },
        { icon: "#vip", iconColor: "#ffc636", info: "会员卡" },
      ],
      serviceList: [
        { icon: "#service", iconColor: "#ff8198", info: "我的购物车" },
        { icon: "#download", iconColor: "#ff8198", info: "下载购物APP" },
      ],
    };
  },
};
</script>

<style scoped>
#profile {
  padding-top: 44px;
}
.accout {
  display: flex;
  justify-content: space-between;
  border-bottom: 10px solid #eee;
}

.accout .accout-item {
  flex: 1;
  text-align: center;
  padding: 30px 0 30px;
}
.accout-item .item-number > span {
  color: var(--color-high-text);
  font-size: 24px;
  font-weight: bolder;
}
.accout .item-text {
  font-size: 12px;
  padding-top: 5px;
}
</style>
