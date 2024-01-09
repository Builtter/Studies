/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch*/


function hojeE(dia){

    switch (dia) {
        case (1):
            console.log(`Dia útil`);
            break;
        case (2):
            console.log(`Dia útil`);
            break;
        case (3):
            console.log(`Dia útil`);
            break;
        case (4):
            console.log(`Dia útil`);
            break;
        case (5):
            console.log(`Dia útil`);
            break;
        case (6):
            console.log(`Dia útil`);
            break;
        case (7):
            console.log(`Fim de semana`);
            break;
        default:
            console.log(`Não se trata de um valor esperado para semana`);
            break;
    }

}

hojeE(8);
hojeE(7);
hojeE(1);
hojeE(2);
hojeE(3);
hojeE(0);
