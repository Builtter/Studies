const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise (resolve => {
        fs.readFile(caminho, function (_,conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois da leitura - mas executo antes');//não espera a leitura do arquivo
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `valor final ${conteudo}`)
    .then(console.log)