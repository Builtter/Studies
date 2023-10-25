// Extra - exercicio 5 - adicionando conversor de moeda para facilitar a leitura do valor de jutos
function converteValorParaFormatoReal(moedaLocal){
    let dinheiroReal = moedaLocal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    return dinheiroReal;    
}

/** 
 *06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

//multiplique o valor principal pela taxa de juros e pelo período de tempo
function jurosSimples (capitalInicial, taxaJuros, tempoAplicacao){
    let valorFinal = (capitalInicial * taxaJuros) * tempoAplicacao;
    return `Com base nos valores inforados, temos um valor final de R$${valorFinal} para juros simples`;
}

//Resultado Juros Simples
console.log(jurosSimples(1000,0.02,3));

//M = C ( 1+i)t : montante é igual ao capital, vezes a taxa de juros mais um, elevado ao tempo.
function jurosComposto(capitalInicial, taxaJuros, tempoAplicacao){
    let valorFinal = capitalInicial * (1 + taxaJuros)**tempoAplicacao;
    let valorFinalJuros = valorFinal - capitalInicial;
    return `Com base nos valores inforados, temos um valor final de R$${converteValorParaFormatoReal(valorFinalJuros)} para juros composto`;
}

//Resultado Juros Composto
console.log(jurosComposto(1000,0.02,3));