console.log("------------ controle 1 ------------");

function noticiaBoa(nota) {
    if (nota >= 7) {
        console.log("Aprovado com nota " + nota);
    } else {
        console.log("Hmmm, estude mais T-T, nota ruim " + nota);
    }
}

noticiaBoa(10);
noticiaBoa(5);
noticiaBoa(7.1);
// noticiaBoa(ba23); // Não corresponde a um valor operavel
noticiaBoa("10"); //Por mais que seja String, o js ainda entende e realiza a operação 

console.log("------------ controle 2 ------------");

function seForVerdade(valor) {
    if (valor) { // com essa condicional o JS estará convertendo/interpretando o valor informando para true ou false(baseando em seu valor)
        console.log("É verdade esse bilhete ... valor corresponde a: " + valor + " ou " + !!(valor));
    } else {
        console.log("Se não for verdade é o que???.... valor corresponde a: " + valor + " ou " + !!(valor));
    }
}

seForVerdade(0);
seForVerdade(1);
seForVerdade(-1);
seForVerdade('a');
seForVerdade(undefined);


console.log("------------ controle 3 ------------");

function testePrint(valor) {
    if (valor > 5)
        console.log("pimba"); // Mesmo que exista mais de uma linha atrelada ao condicional, sem utilizar {} para definir o escopo e vincular mais de uma linha de código, do contrário, apenas a primeira será vinculada a condicional definida
    console.log(valor + " maior que 5!!"); // será mostrada independente do resultado pois não existe análise em cima dessa resposta na função
}

console.log(testePrint(1)); // a primeir resposta foi desconsiderada pelo valor ser menor que 5


console.log("------------ controle 4 ------------");
function testePrint2(valor) {
    if (valor > 5) {
        console.log("pimba");
        console.log(valor + " maior que 5!!");
    } else {
        console.log(valor + " menor que 5!!");
    }
}

console.log(testePrint2(6));

console.log("------------ controle 5 ------------");

const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

imprimirResultado(8);
imprimirResultado(7.1);
imprimirResultado(6.99999);

console.log("------------ controle 6' ------------");

Number.prototype.entre = function (nota1, nota2) {
    return this >= nota1 && this <= nota2;
}

const imprimeResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log("Boa nota, quadro de honra TOP 1 !!");
    } else if (nota.entre(8, 9)) {
        console.log("Boa nota, quadro de honra TOP 2 !!");
    } else if (nota.entre(7, 8)) {
        console.log("Nota na media, Não foi mal mas não tão ruim !!");
    } else if (nota.entre(6, 7)) {
        console.log("Nota ruim, foi mal, melhore!! FON");
    } else if (nota.entre(5, 6)) {
        console.log("Nota na péssima, estude senão vai reprovar !!");
    } else if (nota.entre(4, 5)) {
        console.log("Nota na péssima, estude senão vai reprovar !!");
    } else if (nota.entre(2, 3)) {
        console.log("Nota na péssima, estude senão vai reprovar !!");
    } else if (nota.entre(1, 2)) {
        console.log("Nota na péssima, estude senão vai reprovar !!");
    } else if (nota.entre(0, 1)) {
        console.log("Nota na péssima, estude senão vai reprovar !!");
    } else {
        console.log("Nova inválida, verifique os valores");
    }
    console.log("Fim")
}

imprimeResultado(6.5);

