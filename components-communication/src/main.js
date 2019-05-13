import Vue from 'vue'
import App from './App.vue'

// Another way to communicate between sibling and sibling. Needs to go first
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

