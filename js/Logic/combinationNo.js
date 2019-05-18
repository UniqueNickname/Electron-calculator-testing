function calc_combinationNo (n, k) {
    let fact_n     = factorial(n);
    let fact_sub   = factorial(n - k);
    let fact_k     = factorial(k);
    let den        = fact_sub * fact_k;
    let res        = fact_n / den;

    return res;
}