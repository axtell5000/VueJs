import Vue from 'vue';
import axios from 'axios';
import Vuelidate from 'vuelidate';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuelidate);

// Setting some axios defaults, which are availible accross the app
axios.defaults.baseURL = 'https://vuejs-form-project.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'dasghsf';
axios.defaults.headers.get['Accepts'] = 'application/json';

// Working with interceptors(middleware) to do something before response or request
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log(config, 'config'); 
  return config; // have to have this line or it will cause problems - a bottleneck
});

const resInterceptor = axios.interceptors.response.use(res => {
  console.log(res, 'res');
  return res; // have to have this line or it will cause problems - a bottleneck
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
