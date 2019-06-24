<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    // like getterrs, mutations must use the 3 dots to allow for more flexibilty
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>