const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axiios = require('axios'); //client http - realiza requisições remotamente

const pais = f => f.pais === 'China';
const sexo = f => f.genero === 'F';
const menorSalario = (funcio, funcioAtual) => {
    return funcio.salario < funcioAtual.salario ? funcio : funcioAtual;
};

axiios.get(url).then(response => {
    const funcionarios = response.data;

    //desafio: Selecionar mulher, chinesa, menor salario
    console.log(funcionarios.filter(pais).filter(sexo).reduce(menorSalario));

    // console.log(funcionarios);

})