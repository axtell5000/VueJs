<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedColor = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedColor = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedColor = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedColor"><p>Some content</p></component>
                <!-- <app-blue><p slot="blue">I am blue</p></app-blue>
                <app-green slot="green">I am green</app-green>
                <app-red slot="red">I am red</app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
         data: function() {
            return {
               selectedColor: 'appBlue'
            };
        }
    }
</script>

<style>
</style>
