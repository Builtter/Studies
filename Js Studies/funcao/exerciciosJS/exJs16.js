/**16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */


function calculando(num1, sinal, num2){
    var a = num1;
    var b = num2;
    var operador = sinal;

    switch (operador) {
        case '+':
            console.log("Soma: " +  (a + b));
            break;
        case '-':
            console.log("Subtração: " + (a - b));
        break;
        case '*':
            console.log("Multiplicação: " + (a * b));
        break;
        case '/':
            console.log("Divisão: " + (a / b));
        break;                 
        default:
            console.log('ordem de inserção de dados: numero | "operadorVálido" | numero')
            break;
    }
};

calculando(2,'+',2);
calculando(2,'-',2);
calculando(2,'*',2);
calculando(2,'/',2);
calculando(2,'++',2);
