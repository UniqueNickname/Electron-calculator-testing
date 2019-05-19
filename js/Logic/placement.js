const factorial = require('../Logic/factorial');

function calc_placement (n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
    ////console.log("И оно запустилось");
    
    let ready = true;
    let ns    = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];

    for(let i = 0; i < ns.length; i++) {
        if(!(ns[i] >= 0)) {
            ready = false;
            return "введите числа больше 0";
        }
    }

    for(let i = 0; i < ns.length; i++) {
        if(!((ns[i] - Math.floor(ns[i])) == 0)) {
            ready = false;
            return "введите целые числа";
        }
    }

    for(let i = 0; i < ns.length; i++) {
        if(ns[i] > 0) {
            ns[i] = parseInt(ns[i]);
        } else {
            ns[i] = 0
        }
    }

    if(ready) {
        let sum = 0;
        for(let i = 0; i < ns.length; i++) {
            sum += ns[i];
        }
        ////const sum   = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;
        ////console.log("sum   = " + sum);

        const f_sum = factorial(sum);
        ////console.log("f_sum = " + f_sum);

        const f_n1  = factorial(n1);
        const f_n2  = factorial(n2);
        const f_n3  = factorial(n3);
        const f_n4  = factorial(n4);
        const f_n5  = factorial(n5);
        const f_n6  = factorial(n6);
        const f_n7  = factorial(n7);
        const f_n8  = factorial(n8);
        const f_n9  = factorial(n9);
        const f_n10 = factorial(n10);
    
        const mult = f_n1 * f_n2 * f_n3 * f_n4 * f_n5 * f_n6 * f_n7 * f_n8 * f_n9 * f_n10;
        ////console.log("mult   = " + mult);
    
        return f_sum / mult;
    }
}

module.exports = calc_placement;