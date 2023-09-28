console.log('--------------LOGICOS--------------');
// console.log(true != false);

/*
Tabela Verdade
 -E-
V e V → V
V e F → F
F e V → F
F e F → F

-OU-
V ou V → V
F ou V → V
V ou F → V
F ou F → F

-XOR- ou exclusivo, onde deve ser diferente pra ser verdadeiro

V xor V → F
V xor F → V
F xor V → V
F xor F → F

-EXCLAMAÇÃO LÓGICA-
!V → F
!F → V
*/

// Brincando com a lógica
function compas(trab1, trab2) {
    const comprarSorvete = trab1 || trab2; // o simbolo || corresponde a OU
    const comprarTv50 = trab1 && trab2; // os simbolos && correspondem a E
    // const comprarTv32 = !!(trab1 ^ trab2) // BITWISE XOR ou OU EXCLUSIVO → ^ → Somente a diferença é true
    const comprarTv32 = trab1 != trab2; // somente a diferença retorna true, assim fazendo o trabalho de XOR ↑ de uma forma mais simples
    const manterSaudavel = !comprarSorvete; // Negação lógica - Operador unário !

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log('Peguei os dois trabalhos');
console.log(compas(true, true));
console.log('Peguei o primeiro trabalho');
console.log(compas(true, false));
console.log('Peguei o segundo trabalho');
console.log(compas(false, true));
console.log('Não peguei nenhum dos dois trabalhos');
console.log(compas(false, false));

