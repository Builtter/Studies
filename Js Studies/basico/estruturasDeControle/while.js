console.log("---------------------- While --------------------");

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min; //Math.random(): Gera um número entre 0 e 1
    return Math.floor(valor);
}

let opcao = 0;
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 20);
    console.log(`opção escolhida foi ${opcao}.`);
}
console.log("Saímos do loop pois o valor foi igual a -1.");


console.log("---------------------- Do While --------------------");

//Poderia ter usado a mesma function acima? Sim! quis fazê-lo? Não.
function defineRange(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcaoDoWhile; // Podndo apenas ser declarado como valor indefinido não terá efeito pois no primeiro loop um valor será atribuído
do {
    opcaoDoWhile = defineRange(-1, 20);
    console.log(`Opcão escolhida foi ${opcaoDoWhile}.`);
} while (opcaoDoWhile != -1)

console.log("Saímos do loop pois o valor foi igual a -1.");
