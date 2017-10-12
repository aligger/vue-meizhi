<template>
  <div>
    <div class="page-cover" v-show="isShowMenu" @click="isShow"></div>
    <header class="header" :class="{'show':isShowMenu}" @click="isShow">
      <div class="pull-left">
        <span class="iconfont icon-fenlei"></span>
      </div>
      <h1 class="title">{{headerTitle}}</h1>
      <div class="pull-right">
        <span class="iconfont icon-sousuo_sousuo"></span>
      </div>
    </header>
    <v-menu :show="isShowMenu" />
  </div>
</template>
<script type="text/ecmascript-6">
import {mapState} from 'vuex';
import vMenu from '../menu/menu.vue';
export default {
  name: 'v-header',
  components: {
    vMenu
  },
  data() {
    return {
      show: true
    }
  },
  computed: {
    ...mapState(['headerTitle','isShowMenu'])

  },
  methods: {
    isShow() {
      this.$store.commit('UPDATE_MENU_STATE');
    }
  }
}
</script>
<style lang="less" scoped>
.page-cover {
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,.4);
  z-index: 7
}
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: table;
  width: 100%;
  min-height: 50px;
  line-height: 50px;
  background-color: #03a9f4;
  color: #fff;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .1);
  transition: all .3s ease;
  &.show {
    transform: translateX(250px);
  }
  .title {
    position: absolute;
    margin: 0;
    min-height: 50px;
    text-align: center;
    white-space: nowrap;
    right: 100px;
    left: 100px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 2;
    font-weight: normal;
  }
  .pull-left {
    display: flex;
    float: left;
    padding: 0 10px;
    font-size:16px;
    font-weight: 400;
    .iconfont {
      font-size: 18px;
    }
  }
  .pull-right {
    display: flex;
    float: right;
    padding: 0 10px;
    font-size:16px;
    font-weight: 400;
    .iconfont {
      font-size: 18px;
    }
  }
}
</style>


