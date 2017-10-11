<template>
  <div>
    <v-header/>
    <v-loading :show="isShowLoading" />
    <router-view/>
  </div>
</template>

<script>
import vHeader from './components/header/header.vue';
import vLoading from './components/loading/loading.vue';
export default {
  name: 'app',
  components: {
    // vMenu,
    vHeader,
    vLoading
  },
  data () {
    return  {
      isShowLoading: true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
