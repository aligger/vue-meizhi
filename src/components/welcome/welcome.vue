<template>
  <div class="welcome">
    <div class="loader-inner pacman">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
import { savaToLocalStorage } from '../../common/js/store';
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({
        name: 'welfare'
      });
      savaToLocalStorage('mz', 'welcome', true);
    }, 5000);
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import './welcome.styl';
</style>