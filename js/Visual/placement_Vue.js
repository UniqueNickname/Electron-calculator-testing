placement = new Vue({
    el: '#placement',
    data: {
        incomingData_N_1:  '',
        incomingData_N_2:  '',
        incomingData_N_3:  '',
        incomingData_N_4:  '',
        incomingData_N_5:  '',
        incomingData_N_6:  '',
        incomingData_N_7:  '',
        incomingData_N_8:  '',
        incomingData_N_9:  '',
        incomingData_N_10: '',
        result: ''

    },
    methods: {
        Calculator: function() {
            const n1  = this.incomingData_N_1;
            const n2  = this.incomingData_N_2;
            const n3  = this.incomingData_N_3;
            const n4  = this.incomingData_N_4;
            const n5  = this.incomingData_N_5;
            const n6  = this.incomingData_N_6;
            const n7  = this.incomingData_N_7;
            const n8  = this.incomingData_N_8;
            const n9  = this.incomingData_N_9;
            const n10 = this.incomingData_N_10;
            
            this.result = calc_placement(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10);
        }
    },
})