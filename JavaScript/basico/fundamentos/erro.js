//  Funcao para tratamento de erro

function tratarErroELancar(erro) {
    // throw new Error('...........Mensagem........');
    // throw 10
    // throw true
    // throw 'Mensagem 2'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeMaiusculo(obj) {
    try {                                           //Tenda o bloco em caso de erro, lança pra o próximo bloco
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {                                   //Ao capturar o erro acima, chama a funcao de  tratamento de erro e retorna informacoes sobre o erro
        tratarErroELancar(e)
    } finally {                                     //Retorna mensagem definida independente da resolucao
        console.log('Apareço dando certo ou não!!')
    }
}

const obj = { nome: 'Ricardo' } //O erro do codigo esta na definicao da chave do objeto que nao condiz com a chave utilizada na funcao chave correto NAME
imprimirNomeMaiusculo(obj)