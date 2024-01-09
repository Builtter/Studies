const motoristas = ['junior','tadeu','joaquin','hernane','peter'];
motoristas.pop();// Exclui o ultimo elemento do array
motoristas.push('Marcos');//adiciona elemento a ultima posição do array
motoristas.shift()//remove o primeiro item do array
motoristas.unshift('Marques')//Adiciona um item no inicio do array

console.log(motoristas);

const filtroMotor = motoristas.slice(2); //Cria um novo array a partir do indicie informado
console.log(filtroMotor);

const filtroMotor2 = motoristas.slice(2,4); //Cria um novo array a partir do indicie informado com o final anterior ao segundo indicie
console.log(filtroMotor2);
