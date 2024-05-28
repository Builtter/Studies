function funcionaOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            // con.log('temp')
            if (Math.random() < chanceErro) {
                reject('Temos um erro')
            } else {
                resolve(valor)
            }
        } catch (error) {
            reject(error) //possui maior precedência de execução, caso erro, será descriminado em geral casolnenhum then possua tratamento individual
        }
    })
}

funcionaOuNao('Teste...', 0.5)
    .then(v => `valor: ${v}`)
    .then(
        v => consol.log(v),
        // err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Qusae Fim!'))
    .catch(erro => console.log(`Erro Geral: ${erro}`))
    .then(() => console.log('Fim!'))