<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      v-show="isTabControl"
      class="tab-control"
      :list="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl2"
    ></tab-control>

    <scroll
      class="wrapper"
      :click="true"
      :listen-scroll="true"
      :probeType="3"
      @scroll="contentScroll"
    >
      <!-- 轮播图 -->
      <div class="content">
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-recommend :recommend="recommend"></home-recommend>
        <home-keywords></home-keywords>
        <tab-control
          :list="['流行', '新款', '精选']"
          @tabClick="tabClick"
          ref="tabControl"
        ></tab-control>
        <goods-list :goodsList="showGoodsList"></goods-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import HomeSwiper from "./childcomps/HomeSwiper.vue";

import { getHomeMultidata, getHomeData } from "network/home.js";
import HomeRecommend from "./childcomps/HomeRecommend.vue";
import HomeKeywords from "./childcomps/HomeKeywords.vue";
import TabControl from "../../components/content/tabcontrol/TabControl.vue";
import GoodsList from "./childcomps/GoodsList.vue";
import Scroll from "../../scroll/scroll.vue";
export default {
  name: "Home",
  data() {
    return {
      swiperList: [],
      recommend: [],
      goodsList: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: null,
      isTabControl: false,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeKeywords,
    TabControl,
    GoodsList,
    Scroll,
  },
  created() {
    this.getHomeMultidata();

    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  computed: {
    showGoodsList() {
      return this.goodsList[this.currentType].list;
    },
  },
  updated() {},
  methods: {
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
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      this.isTabControl = this.tabOffsetTop <= -position.y;
    },

    // axios请求数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        // 轮播图所需要的数据
        this.swiperList.push(...res.data.banner.list);

        // recommend所需要的数据
        this.recommend.push(...res.data.recommend.list);
      });
    },
    getHomeData(type) {
      getHomeData(type, this.goodsList[type].page).then((res) => {
        this.goodsList[type].list.push(...res.data.list);

        this.$nextTick(() => {
          this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
          console.log(this.tabOffsetTop);
        });
      });
    },
  },
};
</script>

<style scoped>
#home {
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
.tab-control {
  position: relative;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>