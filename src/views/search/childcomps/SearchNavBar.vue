<template>
  <div id="search-navbar">
    <div class="left" @click="backClick()">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div class="right">
      <van-search
        v-model="value"
        background="#ff8198"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
      >
        <div class="action" slot="action" @click="onClick()">搜索</div>
      </van-search>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  created() {},
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    onClick() {
      const value = this.value;
      this.$emit("onClick", value);
    },
    // onInput() {
    //   const value = this.value;
    //   this.$emit("onClick", value);
    // },
  },
};
</script>

<style scoped>
#search-navbar {
  display: flex;
  align-items: center;
  background-color: var(--color-tint);
}
.van-search,
.van-search--show-action {
  height: 45px;
}
.action {
  background-color: white;
  border-radius: 20px;
  padding: 0 15px;
}
.left {
  width: 50px;
  text-align: center;
}
.right {
  flex: 1;
}
</style>