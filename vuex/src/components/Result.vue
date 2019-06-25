<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';

    export default {
        computed: {
            // mapGetters is a more neat way to use Getters, please note code below, if we dont do it that way we are
            // unable to create our own computed function that are not related to mapGetter
            ...mapGetters({
                counter: types.DOUBLE_COUNTER               
            })
        }
    }
</script>