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

for (i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`)
}
