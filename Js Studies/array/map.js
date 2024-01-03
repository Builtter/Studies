const num = [1,2,3,4,5];


// map corresponde ao for mas com um objetivo
let dobro = num.map(function(e){
    return e * 2;
})

console.log(dobro);

console.log('=========');

const soma10 = e => e + 10;
const triplo = e => e*3;
const dinDin = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

result = num.map(soma10).map(triplo).map(dinDin);
console.log(result);