export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Peach', 'Strawberry', 'Plum'],
      filterText: ''
    };
  },
  // for more complex filtering, rather use a computed function for less strain on the DOM
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    }
  },
  created() {
    console.log('Created');
  }
};