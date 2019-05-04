new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    link: 'http://google.com'
  },
  methods: {
    sayHowzit: function() {
      return this.title; // vue behind the scenes is allowing this to point to data properties
    }
  }
});

