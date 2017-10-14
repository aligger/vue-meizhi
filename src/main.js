// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource' // 异步加载数据模块
import infiniteScroll from 'vue-infinite-scroll' // 引入滑动模块
// import App from './App'
import router from './router'
import store from './vuex/store' // 引入状态管理
import { loadFromLocalStorage } from './common/js/store' // 获取本地缓存
import './common/css/index.styl' // 引入公共样式

Vue.config.productionTip = false;

Vue.use(vueResource);
Vue.use(infiniteScroll);

/* eslint-disable no-new */
new Vue({
  store,
  router
}).$mount('#app'); // 创建和挂载根实例。

// 首次加载欢迎页
if (!loadFromLocalStorage('mz', 'welcome', false)) {
  router.push('/welcome');
}
else {
  router.push({
    name: 'welfare'
  });
}
