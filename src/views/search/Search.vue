<template>
  <div id="search-result">
    <search-nav-bar @onClick="onClick"></search-nav-bar>

    <tab-control
      class="tabcontrol"
      :list="['流行', '新款', '精选']"
      ref="scroll"
      @tabClick="tabClick"
      v-show="value"
    ></tab-control>
    <scroll class="wrapper">
      <goods-list v-show="value" :goodsList="showarticles_array"></goods-list>
    </scroll>
  </div>
</template>

<script>
import SearchNavBar from "./childcomps/SearchNavBar.vue";

import { getHomeData } from "network/home.js";
import GoodsList from "components/content/goods/GoodsList.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import Scroll from "../../components/common/scroll/scroll.vue";
export default {
  name: "SearchResult",
  data() {
    return {
      goodsList: {
        pop: { list: [] },
        new: { list: [] },
        sell: { list: [] },
      },
      articles_array: {
        pop: { list: [] },
        new: { list: [] },
        sell: { list: [] },
      },
      currentType: "pop",
      value: null,
    };
  },
  created() {
    for (let i = 1; i <= 20; i++) {
      this.getHomeData("pop", i);
      this.getHomeData("new", i);
      this.getHomeData("sell", i);
    }
  },
  computed: {
    showarticles_array() {
      return this.articles_array[this.currentType].list;
    },
  },
  methods: {
    //  数据匹配，搜索
    onClick(value) {
      this.value = value;
      this.articles_array["pop"].list = this.goodsList["pop"].list;
      this.articles_array["new"].list = this.goodsList["new"].list;
      this.articles_array["sell"].list = this.goodsList["sell"].list;
      let searchString = value;
      if (!searchString) {
        return this.articles_array;
      }

      searchString = searchString.trim().toLowerCase();

      this.articles_array["pop"].list = this.articles_array["pop"].list.filter(
        (item) => {
          if (item.title.toLowerCase().indexOf(searchString) !== -1) {
            return item;
          }
        }
      );
      this.articles_array["new"].list = this.articles_array["new"].list.filter(
        (item) => {
          if (item.title.toLowerCase().indexOf(searchString) !== -1) {
            return item;
          }
        }
      );
      this.articles_array["sell"].list = this.articles_array[
        "sell"
      ].list.filter((item) => {
        if (item.title.toLowerCase().indexOf(searchString) !== -1) {
          return item;
        }
      });
    },
    // onInput(value) {
    //   console.log(value);
    // },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    // 数据请求
    getHomeData(type, page) {
      getHomeData(type, page).then((res) => {
        this.goodsList[type].list.push(...res.data.list);
      });
    },
  },
  components: {
    SearchNavBar,
    GoodsList,
    TabControl,
    Scroll,
  },
};
</script>

<style scoped>
#search-result {
  position: relative;
  height: 100vh;
}
.wrapper {
  position: absolute;
  top: 93px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.tabcontrol {
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>