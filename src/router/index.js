import Vue from 'vue'
import Router from 'vue-router'
// import Loading from '@/components/loading/loading.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // component: Loading
      component(resolve) {
        require.ensure(['../App.vue'], () => {
          resolve(require('../App.vue'));
        });
      }
    }, {
      path: '/welcome',
      name: 'welcome',
      component(resolve) {
        require.ensure(['../components/welcome/welcome.vue'], () => {
          resolve(require('../components/welcome/welcome.vue'));
        });
      }
    }
  ]
})
