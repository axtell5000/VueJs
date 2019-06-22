import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

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