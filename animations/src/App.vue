<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation"><!-- Needed for animation and onlt on 1 element-->
                    <div class="alert alert-info" v-if="show">Here is an info alert</div>
                </transition>
                <transition name="slide" type="animation" appear><!-- Appear - show animation on load-->
                    <div class="alert alert-info" v-if="show">Here is an info alert</div>
                </transition>
                <transition 
                    enter-active-class="animated bounce"                    
                    leave-active-class="animated shake"> <!-- Overwriting default classes used with animation. Leave out the blank ones -->
                    <div class="alert alert-info" v-if="show">Here is an info alert</div>
                </transition>
                <!-- Using key is important when one element is replacing another. The elements involved must be uniquely id'd -->
                <!-- Using mode helps amooth the animation between the two elements-->
                <transition :name="alertAnimation" mode="out-in"><!-- Needed for animation and onlt on 1 element-->
                    <div class="alert alert-info" v-if="show" key="info">Here is an info alert</div>
                    <div class="alert alert-warning" v-else key="warning">Here is a warning alert</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade'
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
