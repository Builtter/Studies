const alunos = [
    { nome: 'jao', nota: 7.2, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'ana', nota: 8.7, bolsista: true },
];

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
},10);//corresponde ao valor padrão inicial

console.log(resultado);