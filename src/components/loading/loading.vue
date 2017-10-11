<template>
  <div class="loading" v-show="show">
    <div class="loader-inner ball-pulse">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-loading',
  props: {
    show: {
      type: Boolean
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: .4;
  .ball-pulse {
    position: absolute;
    top: 50%;
    left: 45%;
    div {
      display: inline-block;
      margin-block-end: 2px;
      background-color: #03a9f4;
      width: 15px;
      height: 15px;
      border-radius: 100%;
      animation-fill-mode: both;
      &:nth-child(1) {
        animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      }
      &:nth-child(2) {
        animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      }
      &:nth-child(3) {
        animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)
      }
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
    opacity: 1
  }
  45% {
    transform: scale(.1);
    opacity: .1
  }
  80% {
    transform: scale(1);
    opacity: 1
  }
}
</style>
