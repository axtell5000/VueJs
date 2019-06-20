<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id // accessing our params
    //     }
    // },
    // // we have to watch the $params, because when it changes Vue wont recognise it has changed unless it is being watched
    // watch: {
    //     '$route'(to, from) {
    //         this.id = to.params.id;
    //     }
    // },
    methods: {
        navigateToHome() {
            this.$router.push({name: 'home'}); // programtically navigating, also using named path
        }
    }
}
</script>