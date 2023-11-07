//12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num){
    var base = num;

    if(base == 0 || base == 1) return 1; //Fatorial de 0 ou 1 igual a zero  
    if(base < 0 ) return -1; // fatorial de numero negativo indicado por -1

    // loop

    while (num > 1){
        num--;
        base = base * num;
    }
    return base;
}

console.log(`Temos o fatorial de 5 igual a ${fatorial(5)}`)
console.log(`Temos o fatorial de 1 igual a ${fatorial(1)}`)
console.log(`Temos o fatorial de 0 igual a ${fatorial(0)}`)
console.log(`Temos o fatorial de -5 igual a ${fatorial(-5)}`)