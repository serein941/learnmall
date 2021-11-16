<template>
  <div id="tab-item">
    <tab-control
      :list="['综合', '销量', '新品']"
      class="tabcontrol"
      v-show="isTabControl"
      @tabClick="tabClick"
      ref="control1"
    ></tab-control>

    <scroll
      class="wrapper"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :listenScroll="true"
    >
      <div class="content">
        <div class="tab-content-category">
          <div
            class="tab-content-category-item"
            v-for="(item, index) in subcategory"
            :key="index"
          >
            <a :href="item.link">
              <img v-lazy="item.image" alt="" />
            </a>
            <div class="text">{{ item.title }}</div>
          </div>
        </div>

        <tab-control
          :list="['综合', '销量', '新品']"
          @tabClick="tabClick"
          ref="control2"
        ></tab-control>
        <goods-list :goodsList="CategoryDetail"></goods-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/common/scroll/scroll.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodsList from "../../../components/content/goods/GoodsList.vue";
export default {
  components: { scroll, TabControl, GoodsList },
  props: {
    subcategory: {
      typeof: Array,
      default() {
        return [];
      },
    },
    CategoryDetail: {
      typeof: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentType: null,
      isTabControl: false,
      tabOffset: null,
    };
  },
  created() {},
  activated() {
    this.$refs.scroll.refresh();
  },
  updated() {
    this.tabOffset = this.$refs.control2.$el.offsetTop;
    console.log(this.tabOffset);
  },
  methods: {
    contentScroll(position) {
      this.isTabControl = this.tabOffset <= Math.abs(-position.y);
    },
    tabClick(index) {
      this.$refs.control1.currentIndex = index;
      this.$refs.control2.currentIndex = index;
      this.$emit("tabControlClick", index);
    },
  },
};
</script>

<style scoped>
#tab-item {
  position: relative;
  height: 100vh;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.tab-content-category {
  display: flex;
  flex-wrap: wrap;
  padding: 5px 8px 20px;
}
.tab-content-category-item {
  width: 33%;
  justify-content: space-between;
  text-align: center;
}
.tab-content-category-item img {
  width: 70%;
  margin-top: 15px;
}
.text {
  font-size: 12px;
  margin-top: 15px;
}

.tabcontrol {
  position: relative;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 10;
}
</style>
