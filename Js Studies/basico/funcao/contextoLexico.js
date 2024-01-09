const valor = 'Global';

// Uma função carrega consigo o contexto no qual ela foi gerada

function minhaFunction() {
    console.log(valor)
}

function exec() {
    const valor = 'Local';
    // console.log(valor); // só existe dentro do escopo da função
    minhaFunction();// Uma função carrega consigo o contexto no qual ela foi gerada
}

exec()