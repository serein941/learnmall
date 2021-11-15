<template>
  <div v-if="Object.keys(shop).length !== 0" id="shop">
    <div class="info-top">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="info-middle">
      <div class="middle">
        <div class="middle-left">
          <div>{{ shop.sells | sellCountFilter }}</div>
          <div>总销量</div>
        </div>
        <div class="middle-left">
          <div>{{ shop.goodsCount }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score-more" :class="{ score: item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better-more" :class="{ better: item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="info-botton">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      typeof: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
#shop {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.info-top {
  margin-top: 20px;
  display: flex;
}
.info-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.info-top span {
  line-height: 40px;
  margin-left: 8px;
}
.info-middle {
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  height: 80px;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
}
.middle {
  flex: 1;
  display: flex;
}
.info-middle .middle-left {
  flex: 1;
}
.info-middle .middle-left:nth-child(2) {
  border-right: 2px solid #ddd;
}
.info-middle .middle-left div:nth-child(1) {
  font-size: 20px;
}
.info-middle .middle-left div:nth-child(2) {
  margin-top: 10px;
}
.info-middle .middle-right {
  flex: 1;
}
.info-middle .middle-right table {
  width: 80%;
  float: right;
}
.info-middle .middle-right table tr td:nth-child(1) {
  text-align: left;
  padding: 5px 0;
}
.info-middle .middle-right table tr td:nth-child(2) {
  text-align: left;
  padding: 5px 0;
}
.info-middle .middle-right table tr td:nth-child(3) {
  color: white;
}
.score-more {
  color: #5ea732;
}
.score {
  color: var(--color-high-text);
}
.better-more span {
  background-color: #5ea732;
}
.better span {
  background-color: var(--color-high-text);
}
.info-botton {
  margin-top: 20px;
  text-align: center;
}
.info-botton button {
  background-color: #f2f5f8;
  border: 0;
  width: 150px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  border-radius: 20px;
}
</style>