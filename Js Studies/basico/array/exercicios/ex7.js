/** crie uma função que receba quatro numeros como parametro... */

const estaEntre = (num, min, max, inclusivo = false) => {
    if((num >= min) && (num <= max) && (inclusivo == true)){// 
        inclusivo = true;
        return inclusivo;
    }
    return inclusivo;
}


console.log(estaEntre(10,50,100));
console.log(estaEntre(16,100,160));
console.log(estaEntre(3,3,15));
console.log(estaEntre(3,3,15, true));