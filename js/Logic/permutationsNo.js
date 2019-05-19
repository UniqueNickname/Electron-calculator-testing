const factorial = require('./factorial');

function calc_permutationsNo (n, k) {
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
    if (ready) {
        let fact_n   = factorial(n);
        let fact_sub = factorial(n - k);
        return fact_n / fact_sub;
    }
}

module.exports = calc_permutationsNo;