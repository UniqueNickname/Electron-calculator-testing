placementNo = new Vue({
    el: '#placementNo',
    data: {
        incomingData: '',
        result: ''

    },
    methods: {
        Calculator: function() {
            const n = this.incomingData;
            if (n >= 0 ) {
                if ((n - Math.floor(n)) == 0) {
                    let res = factorial(n);
                    this.result = res;
                } else {
                    this.result = "введите целое число"
                }
            } else {
                this.result = "введите чесло больше 0"
            }
        }
    },
})