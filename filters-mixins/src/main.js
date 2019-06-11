import Vue from 'vue';
import App from './App.vue';

// Global mixin, this is just for illustration, try avoid this in production
Vue.mixin({
  created() {
    console.log('Global mixin - Created hook');
  }
});

// A global filter
Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
});
