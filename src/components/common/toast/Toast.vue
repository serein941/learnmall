<template>
  <div id="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    // message:{
    //   typeof:String,
    //   default: ''
    // },
    // show:{
    //   typeof:Boolean,
    //   default:false
    // }
  },
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message, duration = 2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 8px 20px;
  color: white;
  box-sizing: border-box;
}
#toast div {
  width: 100%;
}
</style>
