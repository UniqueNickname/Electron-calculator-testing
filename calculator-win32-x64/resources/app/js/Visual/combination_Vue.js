combination = new Vue({
    el: '#combination',
    data: {
        incomingData_N: '',
        incomingData_K: '',
        result: ''

    },
    methods: {
        Calculator: function() {
            const n = this.incomingData_N;
            const k = this.incomingData_K;
            this.result = calc_combination(n, k);
        }
    },
})