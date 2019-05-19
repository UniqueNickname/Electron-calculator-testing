function calc_permutations (n, k) {
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

    if (ready) {
        return Math.pow(n, k);
    }
}
//module.exports = calc_permutations;