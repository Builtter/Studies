// com promise...
const http = require('http');

const getTurma = (letra) => { // letra pois como o caminho é o mesmo para ambas turmas, apenas a letra será alterada para o acesso
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// recurso ES8
// Obj: simplificar uso de promise

let obterAlunos = async () => {
    const classA = await getTurma('A');
    const classB = await getTurma('B');
    const classC = await getTurma('C');
    return [].concat(classA, classB, classC)
}// retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))