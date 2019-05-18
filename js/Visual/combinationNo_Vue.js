combinationNo = new Vue({
    el: '#combinationNo',
    data: {
        incomingData_N: '',
        incomingData_K: '',
        result: ''

    },
    methods: {
        Calculator: function() {
            const n = this.incomingData_N;
            const k = this.incomingData_K;
            console.log(n + ":" + k);
            if (n >= 0 && k >= 0) {
                if ((n - Math.floor(n)) == 0 && (k - Math.floor(k)) == 0) {
                    if ((n - k) >= 0) {
                        let res = calc_combinationNo(n, k);
                        this.result = res;
                    } else {
                        this.result = "n должен быть больше или равен k"
                    }
                } else {
                    this.result = "введите целые числа"
                }
            } else {
                this.result = "введите чесла больше 0"
            }
        }
    },
})