let contador = 1
while (contador <= 10) {
    console.log(`Contador = ${contador}.`)
    contador++
}

console.log("---------------------- FOR --------------------");

for (let i = 1; i <= 10; i++) {
    console.log(`Temos o valor de i = ${i}`);
}
console.log("Saímos do FOR!!");

console.log("---------------------- FOR 2 --------------------");

let notas = [6.5, 5.8, 9.8, 9.9, 0.9];

for (let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`)
}


console.log("---------------------- FOR 3 --------------------");
// FOR IN

for (let i in notas) {
    console.log(`Aqui temos o indicie: ${i}  e nota que corresponde ao incidie dentro do arrey: ${notas[i]}`)
}

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Augusto',
    idade: 57,
    peso: 75,
    endereco: 'Rua caninana Qd 3587, numero 25'
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
