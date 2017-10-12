<template>
  <div class="menu">
    <div class="menu-list">
      <div class="menu-header">

      </div>
      <ul class="menu-ul">
        <li v-for="(menu, key) in menus" :key="key">
          <router-link class="item" :to="menu">
            {{menu}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="menu-other"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
const MENU_CONVERT = { 'welfare': '福利', 'day': '每日推荐', 'ios': 'IOS', android: 'Android', web: '前端' };
export default {
  name: 'v-menu',
  props: {
    show: {
      type: Boolean
    }
  },
  data() {
    return {
      MENU_CONVERT: MENU_CONVERT
    }
  },
  computed: {
    ...mapState([
      'menus', 'news'
    ])
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.menu {}

.menu-list {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 250px;
  background-color: #22262a;
  .menu-ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
    .item {
      display: block;
      padding: 10px 13px;
      font-size: 14px;
      text-align: left;
      text-indent: 1px;
      line-height: 15px;
      color: #a6adb3;
      font-weight: 700;

    }
  }
}
</style>

