export const lengthMixin = {
  data() {
    return {
      text: 'Hello there'
    };
  },
  computed: {
    countText() {
      return this.text.length;
    }
  }
}