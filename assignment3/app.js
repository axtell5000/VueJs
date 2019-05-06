new Vue({
        el: '#exercise',
        data: {
            value: 0            
        },
        // Nice article here re meaning: - https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
        // keeps things 'cached' and only changes if data properties been used has changed - better option
        computed: {
            result: function() {
                console.log('Computed');
    	        return this.value >= 37 ? this.result = 'done' : 'Not there yet';
            }
        },
        // good with async operations
        watch: {
            result: function() {
            var vm = this;
            setTimeout(function() {
                vm.value = 0;
                }, 5000);
            }
        }
    });