let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);//Negar duas vezes demonstra o valor real entre true e false forçando uma atribuiçao de valor true ou false


console.log('Os de verdade sei quem são:');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); //caso o valor da atribuição seja resolvido para true, o valor será true


console.log('Os de mentira sabem quem são de verdade:');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));//caso o valor da atribuição seja resolvido para false, o valor será false


console.log('Extra:');
console.log(!!('' || null || 0 || ' ' || 1254 || 'Texto true')); // prioriza verdadeiro


let nome = '';
console.log(nome || 'Desconhecido');



nome = 'Pimpolho';
console.log(nome || 'Desconhecido');
