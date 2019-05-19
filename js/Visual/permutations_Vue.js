permutations = new Vue({
    el: '#permutations',
    data: {
        incomingData_N: '',
        incomingData_K: '',
        result: ''

    },
    methods: {
        Calculator: function() {
            const n = this.incomingData_N;
            const k = this.incomingData_K;
            this.result = calc_permutations(n, k);
        }
    },
})