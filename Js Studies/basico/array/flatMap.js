const escola = [
{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gugu',
        nota: 8.1
    }, {
        nome: 'ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    }, {
        nome: 'Robson',
        nota: 7.3
    }]
}];

// metodos
const getNotaAluno = aluno => aluno.nota;//função que retorna a noto do aluno
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno); //função que retorna um array com as notas dos alunos da classe

const notas1 = escola.map(getNotasDaTurma);//funlção que retorna um array com as notas de cada turma dentro do array

console.log(notas1); // um array com arrays baseado na quantidade de turmas

//flatMap → Não exite na api js mas pode ser desenvolvido

Array.prototype.flatMap = function(callback){ // vai receber um retorno
    return Array.prototype.concat.apply([], this.map(callback)) //o retorno será contatenado a um único array
};

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);