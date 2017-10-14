import Vue from 'vue';
import Vuex from 'vuex';

// 告诉 vue 使用 vuex
Vue.use(Vuex);

const NAME_TITILE = ['welfare', 'day', 'android', 'ios', 'web'];
// 创建一个对象来保存应用启动时的初始状态
const state = {
  'headerTitle': '福利',
  'menus': NAME_TITILE,
  'isShowMenu': false,
  'isShowLoading': false,
  'news': 5
}

// 创建一个对象存储
const mutations = {
  /**
   * 更新标题
   * @param {*} state 
   * @param {*} title 
   */
  UPDATE_TITLE(title) {
    state.headerTitle = title;
  },

  /**
   * 更新 Menu 的显示状态
   */
  UPDATE_MENU_STATE() {
    state.isShowMenu = !state.isShowMenu;
  }
}

export default new Vuex.Store({
  state,
  mutations
});