<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.getters.doubleCounter;
            }
        }
    }
</script>