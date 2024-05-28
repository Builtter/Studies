// setTimeout(function () {
//     console.log('função 1 executou');

//     setTimeout(function () {
//         console.log('função 2 executou');

//         setTimeout(function () {
//             console.log('função 3 executou');

//         }, 2000)
//     }, 2000)
// }, 2000);

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise')

            resolve()
        })
    }, tempo)
}

esperarPor()
    .then(()=> esperarPor())
    .then(esperarPor());