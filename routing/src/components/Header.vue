<template>
  <ul class="nav nav-pills">
    <!-- Just like Angular and React, 'exact' forces the link to be exact, for example the '/' appears in both and could cause issues -->   
    <router-link to="/" active-class="active" tag="li" exact><a>Home</a></router-link>
    <router-link to="/user/10" active-class="active" tag="li"><a>User 10</a></router-link>
    <router-link to="/user/20" active-class="active" tag="li"><a>User 20</a></router-link>
  </ul>
</template>