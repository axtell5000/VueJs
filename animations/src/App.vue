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
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <!-- Included some hooks when using javascript for the animations -->
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"><!-- Telling Vue we are not using css, so it can skip a few steps -->
                    <div style="width: 400px; height: 200px; background-color: lightgreen" v-if="load"></div>
                </transition>
                <hr>
                <button 
                    class="btn btn-primary"
                    @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle Component</button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide"> <!-- For animating multiple items at once -->
                        <li 
                            class="list-group-item" 
                            v-for="(number, index) in numbers" 
                            :key="number" 
                            @click="removeItem(index)"
                            style="cursor: pointer">{{ number }}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
                show: false,
                alertAnimation: 'fade',
                load: true,
                elementWidth: 200,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            };
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 200;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();// this is important when working with JavaScript an d animation, tells it to stop
                    }
                }, 20);
       
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },

            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 400;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();// this is important when working with JavaScript an d animation, tells it to stop
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
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
        opacity: 0;
        position: absolute;
        transition: opacity 1s;
    }

    .slide-move {
        transition: transform 1s;
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
