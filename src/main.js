import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import toast from './components/common/toast'
import 'vant/lib/index.css';
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'

Vue.use(vant)

Vue.config.productionTip = false
    // 解决移动端300ms延迟
FastClick.attach(document.body)
    //安装toast提示
Vue.use(toast)
    // 使用图片懒加载
Vue.use(VueLazyLoad, {
    preLoad: 1,
    loading: require('assets/img/common/placeholder.png')
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')