<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <!-- component - reserved word to hold dynamic content -->
                <keep-alive><!-- If we dont do this the component will be destroyed when we go to other. Using this disables destroy -->
                    <component :is="selectedComponent"><p>Default Content</p></component>
                </keep-alive>
               <!-- <app-quote>
                   Correspond the slot to the name attribute in the child 
                   <h2 slot="title">{{ quoteTitle }}</h2>
                   <p slot="content">I am Iron Man</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        },
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            };
        }
    };
</script>

<style>
</style>
