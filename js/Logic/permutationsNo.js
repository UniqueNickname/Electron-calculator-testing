const factorial = require('./factorial');

function calc_permutationsNo (n, k) {
    let fact_n   = factorial(n);
    let fact_sub = factorial(n - k);
    let res      = fact_n / fact_sub;

    return res;
}

module.exports = calc_permutationsNo;