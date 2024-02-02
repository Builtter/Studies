function contaCaractere(alvo, frase) {
    var contador = 0;
    // para esse exercicio, letras maiúsculas deverão ser desconsideradas, 
    // caso contrário, seria utilizado .toLowerCase() para tratar a frase

    for (letra of frase) {
        if (alvo == letra) {
            contador++
        }
    }
    console.log(`A frase contém ${contador} letras`);

}

contaCaractere('a', 'Aprenda técnicas e conceitos modernos de JavaScript')