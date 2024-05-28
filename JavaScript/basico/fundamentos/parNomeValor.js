// par nome/valor

// Contexto léxico → local onde a variável foi definida (cotexto local)

const saudacao = 'Iai meu xapa';// contexto léxico 1 

function exec() {
    const saudacao = 'Bão?';
    return saudacao;
}

console.log(exec()); // acessada somente de dentro do excopo definido
console.log(saudacao);

console.log('------------------Em Objetos-------------');


// Objetos são grupos aminhados de pares nomes/valor
const cliente = {
    nome: 'jão',
    idade: 34,
    peso: 88,
    endereco: {
        logradouro: 'Rua jamel da Cunha',
        numero: 268
    }
}

console.log(cliente);
