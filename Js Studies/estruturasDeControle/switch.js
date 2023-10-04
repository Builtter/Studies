const imprimeResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Honra!");
            break;
        case 8:
        case 7:
            console.log("Parabens, boa nota!");
            break;
        case 6:
        case 5:
            console.log("Estude mais");
            break;
        case 4:
        case 3:
        case 2:
        case 1: // mesmo que exista uma condição vàlida, o switch direcionará para o próximo item por não existir um bloco de resolição
        case 1:
            console.log("Recuperação");
            break;
        case 0:
            console.log("Reprovado!!!");
        default:
            console.log("valor inváido")
    }
}

imprimeResultado(9.9);
imprimeResultado(8.999999999);
imprimeResultado("Sou string"); // nada acontece pois não corresponde a um padrão definido no switch, a não ser que exista um default para tratamentor de dados indesejados
imprimeResultado(5.00001);
imprimeResultado(1);
imprimeResultado(0);


