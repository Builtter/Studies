//Continuar na aula #144

const alunos =[
    {nome: 'jão', nota: 7.9},
    {nome: 'mary', nota: 9.2}
];

//iperativo - como deve ser feito
let total1 = 0;
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota;
}
console.log(total1/alunos.length);//Media de notas por alunos

//declarativo - o que deve ser feito para alcançar o objetivo

const getNota = alunos => (alunos.nota);
const soma = (total, atual) => (total + atual);

const toatl2 = alunos.map(getNota).reduce(soma);
console.log(toatl2/alunos.length);

// Iperativo: metodologia que aborta todos os paços a serem seguidos pra acançar a resolução de determinado problema
// Declarativo: aborta os pontos a serem abordados para alcançar a resolução do problema