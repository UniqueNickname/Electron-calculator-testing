const factorial = require('../Logic/factorial');

function calc_combinationNo (n, k) {
    let ready = true;
    let ns    = [n, k];

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

    if(parseInt(n) <= parseInt(k)) {
        ready = false;
        return "n должен быть больше или равен k";
    }

    if(ready) {
        let fact_n     = factorial(n);
        let fact_sub   = factorial(n - k);
        let fact_k     = factorial(k);
        let den        = fact_sub * fact_k;
        return Math.floor(fact_n / den);
    }
}
module.exports = calc_combinationNo;