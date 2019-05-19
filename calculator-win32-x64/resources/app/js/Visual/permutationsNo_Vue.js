permutationsNo = new Vue({
    el: '#permutationsNo',
    data: {
        incomingData_N: '',
        incomingData_K: '',
        result: ''

    },
    methods: {
        Calculator: function() {
            const n = this.incomingData_N;
            const k = this.incomingData_K;
            this.result = calc_permutationsNo(n, k);
        }
    },
})