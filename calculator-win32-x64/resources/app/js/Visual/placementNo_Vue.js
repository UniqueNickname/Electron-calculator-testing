placementNo = new Vue({
    el: '#placementNo',
    data: {
        incomingData: '',
        result: ''

    },
    methods: {
        Calculator: function() {
            const n = this.incomingData;
            this.result = factorial(n);
        }
    },
})