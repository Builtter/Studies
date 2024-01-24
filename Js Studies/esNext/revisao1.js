// let const → Possui escopo de bloco
// var → Não possui escopo de bloco

{
    var a = 1;
    let b = 1;

    console.log(b); // Foi definida, possui escopo de bloco no atualexiste variavel b

}

console.log(a);
// console.log(b); // não foi definida, possui escopo de bloco e no atual, não existe variavel b

console.log('=============');

//template string
const produto= 'ipad';
console.log(`${produto} é caro
!`);

//Destructuring
const [l, e, ...tras] = 'Paralelepipedo';
console.log(l,e,...tras);

const [x, ,z] = [1,2,3]
console.log(x,z);

const {idade: i,nome} = {nome: 'Vitoria', idade: 95} // renomeou o nome do atributo referente a idade
console.log(i,nome);