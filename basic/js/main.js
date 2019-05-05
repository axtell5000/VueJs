new Vue({
  el: '#app',
  data: {
    title: 'Hello World!!',
    titleB: 'Hello World',
    link: 'http://google.com',
    finishedLink: '<a href="http://www.iol.co.za">IOL</a>'
  },
  methods: {
    sayHowzit: function() {
      this.titleB = 'Hello';
      return this.titleB; // vue behind the scenes is allowing this to point to data properties
    },
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
});

new Vue({
  el: '#button',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function () {
      alert('Hello');
    }
  }
});