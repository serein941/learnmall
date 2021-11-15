<template>
  <div id="category">
    <nav-bar><div slot="center">商品分类</div></nav-bar>
    <div class="tab">
      <tab-content
        class="tab-content"
        :tabContent="tabContent"
        @tabClick="tabClick"
      ></tab-content>
      <tab-content-item
        class="tab-content-item"
        :subcategory="subcategory"
        :CategoryDetail="showCategoryDetail"
        @tabControlClick="tabControlClick"
      ></tab-content-item>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
import TabContent from "./childcompos/TabContent.vue";
import TabContentItem from "./childcompos/TabContentItem.vue";
export default {
  components: { NavBar, TabContent, TabContentItem },
  name: "Category",
  data() {
    return {
      tabContent: [],
      categoryData: {},
      currentIndex: -1,
      currentType: "pop",
    };
  },
  created() {
    this._getCategory();
  },
  computed: {
    subcategory() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  methods: {
    tabControlClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "sell";
          break;
        case 2:
          this.currentType = "new";
          break;
      }
    },

    tabClick(index) {
      this._getSubcategory(index);
    },

    _getCategory() {
      getCategory().then((res) => {
        this.tabContent = res.data.category.list;
        // console.log(this.tabContent);
        // 初始化每个类别的子数据
        for (let i = 0; i < this.tabContent.length; i++) {
          this.categoryData[i] = {
            subcategories: [],
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }

        this._getSubcategory(0);
      });
    },
    _getSubcategory(index) {
      this.currentIndex = index;
      const maitKey = this.tabContent[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        this.categoryData[index].subcategories = res.data.list;
        this.categoryData = { ...this.categoryData };

        this._getCategoryDetail("pop");
        this._getCategoryDetail("sell");
        this._getCategoryDetail("new");
      });
    },
    _getCategoryDetail(type) {
      const miniWallkey = this.tabContent[this.currentIndex].miniWallkey;
      this.currentType = type;
      getCategoryDetail(miniWallkey, type).then((res) => {
        // console.log(res);
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
  },
};
</script>

<style scoped>
.tab {
  display: flex;
  width: 100%;
}
.tab-content {
  width: 100px;
}
.tab-content-item {
  width: 100%;
}
</style>