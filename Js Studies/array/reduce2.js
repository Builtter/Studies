const alunos = [
    { nome: 'jao', nota: 7.2, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'ana', nota: 8.7, bolsista: true },
];

// todos alunos são bolsistas?
const bolsista = a => a.bolsista;
const bag = alunos.map(bolsista);
const todosBolsistas = bag.includes(false) ? console.log('Nem todos são bolsistas'): console.log('Todos são bolsistas'); 


console.log('=====ou====');

const todosTemBolsa = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a=>a.bolsista).reduce(todosTemBolsa)); //rensga

//alguem é bolsista? reduce
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista)); //rensga
