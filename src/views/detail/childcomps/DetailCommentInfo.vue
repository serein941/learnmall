<template>
  <div id="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-title">
      <div>用户评价</div>
      <div>更多 <i class="arrow-right"></i></div>
    </div>
    <div class="info-middle">
      <div class="info-logo">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-text">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <span class="date">{{ commentInfo.created | showDate }}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <div class="info-p" v-if="commentInfo.explain">
          <p>{{ commentInfo.explain }}</p>
        </div>
        <div class="info-imgs">
          <img
            :src="item"
            v-for="(item, index) in commentInfo.images"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../common/utils.js";

export default {
  props: {
    commentInfo: {
      typeof: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {},
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
#comment-info {
  margin-bottom: 15px;
  padding: 0 8px;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  display: flex;
  justify-content: space-between;
}
.info-title > div:nth-child(2) {
  font-size: 13px;
}
.info-middle {
  margin-top: 15px;
}
.info-middle .info-logo {
  display: flex;
}
.info-middle .info-logo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.info-middle .info-logo span {
  line-height: 40px;
  margin: 0 5px;
}
.info-middle .info-text {
  margin-top: 15px;
}
.info-middle .info-text p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-middle .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-middle .info-other span {
  margin-right: 5px;
}
.info-middle .info-p {
  margin-top: 15px;
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 10px;
}
.info-middle .info-p p {
  font-size: 12px;
  color: #999;
  line-height: 1.5;
  padding: 5px;
}
.info-imgs {
  margin-top: 10px;
}

.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>