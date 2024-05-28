function randNum(num) {
    var numRandom = parseInt(Math.random() * (11 - 1) + 1);

    if (num == numRandom) {
        console.log(`parabens, acertou o numero sorteado ${numRandom}`);
    } else {
        console.log(`Que pena, numero sorteado foi ${numRandom}`);
    }

}

randNum(1)