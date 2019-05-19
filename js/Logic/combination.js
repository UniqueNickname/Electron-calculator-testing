const factorial = require('../Logic/factorial');

function calc_combination (n, k) {
    ////console.log(n);
    n = parseInt(n) + parseInt(k) - 1;
    ////console.log(n);
    let fact_n     = factorial(n);
    let fact_sub   = factorial(n - k);
    let fact_k     = factorial(k);
    let den        = fact_sub * fact_k;
    let res        = fact_n / den;


    return res;
}
module.exports = calc_combination;