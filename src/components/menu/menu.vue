<template>
  <div class="menu">
    <div class="menu-list" :class="{'show':show}">
      <div class="menu-header">
        <div class="menu-avatar">
          <img src="./avatar.jpg" alt="">
        </div>
        <h2 class="menu-title">
          地府幽冥猫 && 大脸猫
        </h2>
      </div>
      <ul class="menu-ul">
        <li v-for="(menu, key) in menus" :key="key" @click="updateHeader(MENU_CONVERT[menu],menu)">
          <router-link class="item" :to="menu">
            <div class="menu-icon">
              <i class="iconfont" :class="'icon-'+menu"></i>
            </div>
            <span class="menu-text">{{MENU_CONVERT[menu]}}</span>

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
    updateHeader(title, menu) {
      // this.$store.commit('UPDATE_TITLE', title);
      this.$store.commit('UPDATE_MENU_STATE');
    }
  }
}
</script>

<style lang="less" scoped>
.menu-list {
  position: fixed;
  top: 0;
  bottom: 0;
  left: -250px;
  width: 250px;
  background-color: #22262a;
  color: #313131;
  transition: all .3s ease;
  z-index: 99;
  .menu-header {
    width: 100%;
    height: 180px;
    background-color: #262d30;
    .menu-avatar {
      display: inline-block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 20px 70px;
      overflow: hidden;
      cursor: pointer;
      transition: all .3s ease;
      img {
        width: 100%;
      }
      &:hover {
        transform: rotate(720deg);
      }
    }
    .menu-title {
      font-size: 14px;
      color: #fff;
      line-height: 28px;
      font-weight: 500;
      text-align: center;
    }
  }
  &.show {
    transform: translateX(250px)
  }
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
      border-bottom: 1px solid #40474a;
      .menu-icon {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: #383c40;
        border-radius: 50%;
        vertical-align: middle;
        text-align: center;
        .iconfont {
          color: #999;
          line-height: 30px;
          font-weight: 700;
        }
      }
      .menu-text {
        display: inline-block;
        font-size: 15px;
        line-height: 32px;
        vertical-align: middle;
        margin-left: 10px;
        font-weight: 700;
      }
      &.active {
        color: #01aef3;
        .menu-icon {
          background-color: #01aef3;
          .iconfont {
            color: #ffffff
          }
        }
      }
    }
  }
}
</style>

