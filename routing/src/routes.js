import Home from './components/Home.vue';

// Below is for lazy loading, loading code when you want it. This code below is mostly for webpack, hence the require
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  });
};

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  });
};

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  });
};

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  });
};

// Lazy loading code ends

export const routes = [
  { path: '/', component: Home, name: 'home'},
  { path: '/user', component: User, children: [
    {path: '', component: UserStart},
    {path: ':id', component: UserDetail, beforeEnter: (to,from,next) => { // targetting a specific route
      console.log('Inside route setup');
      next();
    }},
    {path: ':id/edit', component: UserEdit, name: 'userEdit'}
  ]},
  { path: '/redirect', redirect: '/user'}, // redirect
  { path: '*', redirect: '/'} // A redirect catch all
];