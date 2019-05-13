<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        //props: ['myName'],
        // We can use an Object for props, here we can also force the prop type. Here we must use a String.
        // e,g props: {myName: String}
        // Another way is like below
        props: {
            myName: {
                type: String,
                required: true,
                default: 'Stephen'
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('');
            },
            resetName() {
                this.myName = 'BIg Steppa';
                this.$emit('nameWasReset', this.myName);
            }
        },
        // A lifecycle hook
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        },
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
