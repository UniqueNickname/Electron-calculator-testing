new Vue({
    el: '#app',
    data: {
        placementNoData: '',
        placementNoRes: 0

    },
    methods: {
        MetodPlacementNoRes: function() {
            const n = this.placementNoData;
            if (n >= 0 ) {
                let res = Factorial(n);
                this.placementNoRes = res;
            } else {
                this.placementNoRes = "введите чесло больше 0"
            }
        }
    },
})