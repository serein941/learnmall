<template>
  <div id="detail">
    <detail-tar-bar @barClick="barClick" ref="index"></detail-tar-bar>
    <scroll
      class="wrapper"
      :click="true"
      :probeType="3"
      :listenScroll="true"
      @scroll="tabScroll"
      ref="scroll"
    >
      <div class="content">
        <detail-swiper ref="base" :swiperList="topImages"></detail-swiper>
        <detail-goods :goods="goods"></detail-goods>
        <detail-shop :shop="shop"></detail-shop>
        <detail-info :detailInfo="detailInfo"></detail-info>
        <detail-param-info
          ref="param"
          :paramInfo="paramInfo"
        ></detail-param-info>
        <detail-comment-info
          ref="comment"
          :commentInfo="commentInfo"
        ></detail-comment-info>
        <goods-list ref="goods" :goodsList="recommendList"></goods-list>
      </div>
      <back-top v-show="isBack" @click.native="backClick()"></back-top>
    </scroll>
    <detail-bottom-shop @addCart="addCart"></detail-bottom-shop>
  </div>
</template>

<script>
import DetailTarBar from "./childcomps/DetailTarBar.vue";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";
import DetailSwiper from "./childcomps/DetailSwiper.vue";
import DetailGoods from "./childcomps/DetailGoods.vue";
import DetailShop from "./childcomps/DetailShop.vue";
import DetailInfo from "./childcomps/DetailInfo.vue";
import DetailParamInfo from "./childcomps/DetailParamInfo.vue";
import DetailCommentInfo from "./childcomps/DetailCommentInfo.vue";

import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/scroll.vue";
import BackTop from "../../components/content/backtop/BackTop.vue";
import DetailBottomShop from "./childcomps/DetailBottomShop.vue";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [], //轮播图信息
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      isBack: false,
      tabTops: [],
    };
  },
  created() {
    this.iid = this.$route.query.iid;
    this.getDetail();
    this.getRecommend();
  },
  updated() {
    this.getOffsetTop();
  },
  methods: {
    getOffsetTop() {
      // 获取距离顶部的距离
      this.tabTops = [];
      this.tabTops.push(this.$refs.base.$el.offsetTop);
      this.tabTops.push(this.$refs.param.$el.offsetTop);
      this.tabTops.push(this.$refs.comment.$el.offsetTop);
      this.tabTops.push(this.$refs.goods.$el.offsetTop);
      this.tabTops.push(Number.MAX_VALUE);
    },
    barClick(index) {
      this.$refs.scroll.scrollTo(0, -this.tabTops[index], 100);
    },
    tabScroll(position) {
      // 判断返回顶部按钮是否显示
      this.isBack = Math.abs(position.y) > 1000;

      const y = Math.abs(position.y);
      for (let i = 0; i < this.tabTops.length - 1; i++) {
        if (y >= this.tabTops[i]) {
          if (this.$refs.index.currentIndex !== i) {
            this.$refs.index.currentIndex = i;
          }
        }
      }
    },
    // 点击返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 100);
    },
    // 点击加入购物车
    addCart() {
      // 1.创建对象
      const obj = {};
      // 2.对象信息
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.nowPrice;
      // 3.添加到Store中
      this.$store.dispatch("addCart", obj).then((res) => {
        this.$toast.show(res, 2000);
      });
    },

    // 请求相关的方法
    getDetail() {
      const iid = this.iid;
      getDetail(iid).then((res) => {
        // console.log(res);
        // 2.1.获取结果
        const data = res.result;

        // 2.2.获取顶部轮播图信息
        this.topImages = data.itemInfo.topImages;

        // 2.3.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        // 2.4.获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 2.5.获取商品信息
        this.detailInfo = data.detailInfo;

        // 2.6.保存参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );

        // 2.7.保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        this.recommendList = res.data.list;
      });
    },
  },
  components: {
    DetailTarBar,
    DetailSwiper,
    DetailGoods,
    DetailShop,
    DetailInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
    BackTop,
    DetailBottomShop,
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
}
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
