function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)//em caso de sucesso, a frase será retornada
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Soou eeeeu abexxtado!!')
    .then(frase => frase.concat('!?!')) // .then → adiciona uma nova atividade a ser feito após o sucesso da promise
    .then(outraFrase => console.log(outraFrase))
    .catch( e => console.log('Hilston temos um problema'))// tratando o erro