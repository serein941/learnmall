<template>
  <div id="user">
    <div class="user-item">
      <div class="user-img"></div>
      <div class="user-info">
        <div class="info-n">
          <span>登录</span>
          <span>/</span>
          <span>注册</span>
        </div>
        <div class="info-f">
          <span><img src="~assets/img/profile/手机.png" /></span>
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </div>
    <div class="main"><img src="~assets/img/profile/箭头.png" /></div>
  </div>
</template>

<script>
export default {
  name: "ProfileUser",
};
</script>

<style scoped>
#user {
  padding: 0 10px;
  background-color: var(--color-tint);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 30px;
}
.user-item {
  display: flex;
  align-items: center;
}
.user-img {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: #ddd;
}
.user-info {
  color: white;
  padding: 5px;
}
.user-info .info-f {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.user-info .info-f img {
  width: 20px;
  height: 100%;
  vertical-align: middle;
}

.main img {
  width: 12px;
}
</style>
