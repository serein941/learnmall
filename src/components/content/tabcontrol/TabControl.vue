<template>
  <div id="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in list"
      :key="index"
      @click="tabClick(index)"
    >
      <span :class="{ active: currentIndex === index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    list: {
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
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
#tab-control {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item span {
  padding: 0 5px 5px;
}
.active {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-tint);
}
</style>