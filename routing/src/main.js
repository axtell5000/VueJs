import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter); // inserting new package into vue core

// creating our new router
const router = new VueRouter({
  routes: routes,
  mode: 'history', // have to do this if you want nice clean urls, not the ones with a hash
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { selector: to.hash}
    }
    return {x: 0, y: 0 };
  }
});

new Vue({
  el: '#app',
  router: router,  
  render: h => h(App)
});
