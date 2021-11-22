<template>
  <van-search
    v-model="value"
    background="#ff8198"
    shape="round"
    show-action
    placeholder="请输入搜索关键词"
    bind:change="onChange"
    @click="ToSearch()"
  >
    <div class="action" slot="action" @click="onClick">搜索</div>
  </van-search>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onChange(e) {
      this.setData({
        value: e.detail,
      });
    },
    ToSearch() {
      this.$router.push("/search");
    },
    onClick() {
      this.$router.push({
        path: "/search",
        query: { value: this.value },
      });
    },
  },
};
</script>

<style scoped>
.van-search,
.van-search--show-action {
  height: 45px;
}
.action {
  background-color: white;
  border-radius: 20px;
  padding: 0 15px;
}
</style>