const mult = (n1,n2) => {
    var total = 0;
    if((n1 < 0) || (n2 < 0)){
        return 'Somente numeros inteiros positivos';
    }

    for (let i = 0; i < n2; i++) {
        total += n1;
    }

    return total;
}

console.log(mult(5,5));
console.log(mult(2,2));