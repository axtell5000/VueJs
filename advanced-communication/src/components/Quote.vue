<template>
  <div>
    <div class="title">
      <slot name="title"></slot><!--This allows us to render a chunk of HTML from outside. Form parent to child -->
      <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span><!-- Use as default -->
    </div>
    <hr>
    <div>
      <!-- You have to use names if you want to refine your display more -->
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  destroyed() {
    console.log('Destroyed!');
  },
  deactivated() {
    console.log('Deactivated!');
  },
  activated() {
    console.log('Activated!');
  }
}
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    margin: 30px auto;
    padding: 30px;
    text-align: center;
  }

  h2 {
    color: red;
  }

  .title {
    font-style: italic;
  }
</style>