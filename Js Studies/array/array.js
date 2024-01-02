// Array é um objeto

let appro = new Array('Tigo','Bia','Leo');

console.log(appro);

// Acessar um array é possível indicando a posição que deseja acessar, iniciando de zero para o primeiro elemento

console.log(appro[0], appro[2], appro[3]);

appro[3] = 'Pimba'; // usado para substituir um valor de uma posição ou adicionar um novo valor a posição desejada
appro.push('Habrahan');//Usado para adicionar um novo elemento ao final do array

console.log(appro);
console.log(appro.length);

appro[9] = 'Diego';
console.log(appro.length);

console.log(appro[8]===undefined);
console.log(appro); //<4 empty items>


appro.sort(); // Organiza o array ordem alfabética
console.log(appro);
console.log(appro[0]);// reorganiza juntamente com as posções

delete appro[0];//Altera o valor da posição desejada para undefined
console.log(appro);

appro.splice(2,2, 'N1', 'N2'); //A partir do segundo elemento, exclua dois itens, adicione itens;
appro.splice(4,0, 'N3', 'N4') // A partir do quarto elemento, não será excluído, será adicionado;s

console.log(appro);

