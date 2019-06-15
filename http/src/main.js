import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';

Vue.use(VueResource); // Adding to the core of Vue, now we can use VueResource across the app

// here we are setting up http globally - notice no $ by http
Vue.http.options.root = 'https://vuejs-project-c7473.firebaseio.com/';

// interceptor - like middleware in express
Vue.http.interceptors.push((request, next) => {
  console.log(request, 'interceptor');

  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => { return { message: response.body }}
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
