new Vue({
  el: '#exercise',
  data: {
    name: 'Stephen',
    age: 25,
    imgUrl: 'https://cdn3.movieweb.com/i/article/HnVm0Cc1x5Os6XolebkVlBmwIcCFV5/798:50/Avengers-Endgame-Question-Marvel-Marketing-Trailer.jpg'
  },
  methods: {
    randomFloat: function() {
      return Math.random();
    }
  }
});