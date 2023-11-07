/**17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano | Aumento
    A - 10%
    B - 15%
    C - 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function percentualPlanoSalarial(plano, salario){
    var salarioAtual = salario;
    var planoSalarial = plano.toUpperCase();

    switch (planoSalarial) {
        case 'A':
            salarioAtual = salarioAtual + (salarioAtual * 0.1)
            console.log(`Seu salário era ${salario}, com o aumento de 10% passou a ser ${salarioAtual}`);
            break;
        case 'B':
            salarioAtual = salarioAtual + (salarioAtual * 0.15)
            console.log(`Seu salário era ${salario}, com o aumento de 15% passou a ser ${salarioAtual}`);
        break;
        case 'C':
            salarioAtual = salarioAtual + (salarioAtual * 0.2)
            console.log(`Seu salário era ${salario}, com o aumento de 20% passou a ser ${salarioAtual}`);
        break;

        default:
            console.log(`Verifique os dados inseridos:
                        • Planos esperados: A, B ou C
                        • Salario deve ser numérico.`);
            if (isNaN(salario) == true){
                console.log('Para o salário, deve-se inserir um valor numérico!');
            }
            break;
    }
}

percentualPlanoSalarial('a',100);
percentualPlanoSalarial('b',100);
percentualPlanoSalarial('c',100);
percentualPlanoSalarial('d',100);