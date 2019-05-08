new Vue({
  el: '#app',
  data: {
    show: true
  }
});

new Vue({
  el: '#app2',
  data: {
    ingredients: ['meat', 'beans', 'potatoes', 'tomatoes'],
    persons: [
      { name: 'Stephen', age: 33, color: 'blue'},
      { name: 'Sam', age: 23, color: 'red'}
    ]
  }
})