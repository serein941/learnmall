<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-search class="search"></home-search>
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
      :pullup="true"
      @scroll="contentScroll"
      @scrollToEnd="pullup"
      ref="scroll"
    >
      <div class="content">
        <!-- 轮播图 -->
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
      <back-top @click.native="backClick()" v-show="isBack"></back-top>
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
import GoodsList from "../../components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/scroll.vue";
import BackTop from "../../components/content/backtop/BackTop.vue";
import HomeSearch from "./childcomps/HomeSearch.vue";
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
      tabhHeight: null,
      tabTop: null,
      isTabControl: false,
      isBack: false,
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
    BackTop,
    HomeSearch,
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
  activated() {
    this.$refs.scroll.scrollTo(0, this.tabTop, 10);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.tabTop = this.tabhHeight;
  },
  methods: {
    // 根据tab-control的index决定获取的数据
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
      this.$refs.tabControl.currentIndex = index;

      if (Math.abs(this.tabhHeight) >= this.tabOffsetTop) {
        this.$refs.scroll.scrollTo(0, -this.tabOffsetTop, 0);
      }
    },
    contentScroll(position) {
      // 决定tab-control是否吸顶显示
      this.isTabControl = this.tabOffsetTop <= -position.y;

      //判断backTop是否显示
      this.isBack = Math.abs(position.y) >= 1000;

      this.tabhHeight = position.y;
    },
    // 点击返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 100);
    },
    // 上拉加载更多
    pullup() {
      this.getHomeData(this.currentType);
    },

    // axios请求数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        // 轮播图所需要的数据
        this.swiperList.push(...res.data.banner.list);

        // recommend所需要的数据
        this.recommend.push(...res.data.recommend.list);

        // 获取tab-control距离顶部的高度
        this.$nextTick(() => {
          this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        });
      });
    },
    getHomeData(type) {
      getHomeData(type, this.goodsList[type].page).then((res) => {
        this.goodsList[type].list.push(...res.data.list);
        this.goodsList[type].page += 1;

        this.$refs.scroll.finishPullUp();
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
.search {
  position: relative;
  top: 44px;
  left: 0;
  right: 0;
}
.wrapper {
  position: absolute;
  top: 89px;
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