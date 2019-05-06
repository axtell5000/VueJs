new Vue({
        el: '#exercise',
        data: {
            value: 0            
        },
        // Nice article here re meaning: - https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
        computed: {
            result: function() {
                console.log('Computed');
    	        return this.value >= 37 ? this.result = 'done' : 'Not there yet';
            }
        },
        watch: {
            result: function() {
            var vm = this;
            setTimeout(function() {
                vm.value = 0;
                }, 5000);
            }
        }
    });