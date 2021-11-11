<template>
  <nav-bar>
    <img
      slot="left"
      src="~assets/img/common/back.svg"
      alt=""
      @click="backClick()"
    />
    <div slot="center" class="tar-bar">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="barClick(index)"
      >
        <span :class="{ active: currentIndex === index }">{{ item }}</span>
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      list: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    barClick(index) {
      this.currentIndex = index;
      this.$emit("barClick", index);
    },
  },
};
</script>

<style scoped>
.tar-bar {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 12px;
  padding: 0 15px;
  color: white;
}
.tar-bar span {
  padding: 3px;
}
.item {
  flex: 1;
}
.active {
  color: yellow;
  border-bottom: 2px solid yellow;
}
</style>