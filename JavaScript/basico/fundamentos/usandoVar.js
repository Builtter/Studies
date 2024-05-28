//Brincando com escopos
{
    {
        {
            {
                {
                    var aqui = 'Estou aqui!';
                }
            }
        }
    }
}

console.log(aqui); // Para o JavaScript, uma variáque declarada fora do escopo permanece visível, diferente se estiver dentro de uma função


function testeEscopo() {
    var local = 1588.556689;
    console.log(local);
}

testeEscopo()
// console.log(local); //local is not defined → Não foi declarada fora do escopo solicitado


/* variaveis dentro de blocos, são visíveis em todo projeto, caso criado dentro de uma função, 
somente poderá ser visualizada / acessada dentro da função → DOIS ESCOPOS, GLOBAL E DENTRO DE FUNCTIONS*/

// A validação dos escopos é feita do escopo central para o menor

console.log("---------------VAR---------------------");

var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);


console.log("--------------LET----------------------");
// Possui escopos por blocos, sendo visível dentro do bloco onde foi declarada  → TRÊS ESCOPOS, GLOBAL, BLOCO E FUNCTION

var numero = 1;
{
    let numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);