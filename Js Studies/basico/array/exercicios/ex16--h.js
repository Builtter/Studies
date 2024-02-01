function checaAnoBisexto (ano){
    const por4 = ano % 4 === 0;
    const por100 = ano % 100 === 0;
    const por400 = ano % 400 === 0;

//fácil de executar mas dificil de entender a lógica
    return (por4 && !por100) || por400 
}

console.log(checaAnoBisexto(2020));
console.log(checaAnoBisexto(2100));

console.log('==========Prova');

console.log(2020 % 4 === 0);
console.log(2020 % 100 === 0);
console.log(2020 % 400 === 0);

console.log('======');

console.log(2100 % 4 === 0);
console.log(2100 % 100 === 0);
console.log(2100 % 400 === 0);

console.log('====== MODO 2');
//modo 2
function checaAnoBisexto2 (ano){
    //checa o segundo mes do ano se tem 29 dias, anos bisextos não possuem dia 29 de fevereiro apenas 28
    return new Date (ano, 1, 29).getDate() === 29;
}


console.log(checaAnoBisexto2(2020));
console.log(checaAnoBisexto2(2024));
console.log(checaAnoBisexto2(2100));