function melhorEstudante(objeto) {
    var novoObj = {}

    for (const [chave, valor] of Object.entries(objeto)) {
        novoObj.nome= chave;
        novoObj.nota= valor;
        novoObj.media= valor;
    };

    console.log(novoObj);
}

var alunos = {
    joao: [8, 7.6, 8.9, 6],
    maria: [9, 6.6, 7.9, 8],
    carla: [7, 7, 8, 9]
}

melhorEstudante(alunos)