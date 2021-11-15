<template>
  <div id="tab-content">
    <scroll class="wrapper" :click="true" ref="scroll">
      <div class="content">
        <div
          class="tab-item"
          v-for="(item, index) in tabContent"
          :key="item.maitKey"
          :class="{ active: currentIndex === index }"
          @click="tabClick(index)"
        >
          {{ item.title }}
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/common/scroll/scroll.vue";
export default {
  components: { scroll },
  props: {
    tabContent: {
      typeof: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;

      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
#tab-content {
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
.content {
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  font-size: 14px;
}
.content .tab-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
}

.active {
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
  color: var(--color-high-text);
  font-weight: bold;
}
</style>