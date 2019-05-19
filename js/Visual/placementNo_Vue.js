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
                    this.result = factorial(n);
                } else {
                    this.result = "введите целое число"
                }
            } else {
                this.result = "введите чесло больше 0"
            }
        }
    },
})