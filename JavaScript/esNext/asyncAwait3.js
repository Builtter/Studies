function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegoSenha(qtdNumeros, tentativas = 1) {
    try {
        const sorteados = []
        for (let _ of Array(qtdNumeros).fill()) {
            sorteados.push(await gerarNumerosEntre(1, 60, sorteados))
        }
        return sorteados
    } catch (e) {
        if (tentativas > 10) {
            throw "Fon"
        } else {
            gerarMegoSenha(qtdNumeros, tentativas + 1)
        }
    }
}



gerarMegoSenha(10)
    .then(console.log)
    .catch(console.log)