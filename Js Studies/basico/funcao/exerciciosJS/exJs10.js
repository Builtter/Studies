// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.

function dividePorTres(valor){

    if((valor % 3) == 0){
        console.log(`O valor é divisível por 3`);
    }else{
        console.log(`O valor não é divisível por 3`);
    }
}

dividePorTres(3);
dividePorTres(2);
dividePorTres(15);

