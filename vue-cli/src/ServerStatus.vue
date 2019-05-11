<template>
  <!-- Like React have to wrap multiple elements, Template doesnt count -->
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        status: 'Critical'
      };
    },
    methods: {
      changeStatus() {
        this.status = 'Normal';
      }
    }
  }
</script>