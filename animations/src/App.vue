<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition name="fade"><!-- Needed for animation and onlt on 1 element-->
                    <div class="alert alert-info" v-if="show">Here is an info alert</div>
                </transition>
                <transition name="slide" type="animation"><!-- Needed for animation and onlt on 1 element-->
                    <div class="alert alert-info" v-if="show">Here is an info alert</div>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            };
        }
    }
</script>

<style>
    /* These classes are needed, the string before the hyphen is = the name in the transition elelmenr, th rest is compulsory for vue
    to work with */
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }

        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(20px);
        }
    }
</style>
