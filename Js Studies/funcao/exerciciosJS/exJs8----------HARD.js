/**
 * 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo)

Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
 */

let pontuacoes = [];
pontuacoes.push(10, 20, 20, 8, 25, 3, 0, 30, 1);


function verificaProgresso(valor){

    let maior = Math.max(valor);
    let menor = Math.min(valor);

    valor.forEach(item => {
        if (item > maior){
            var recorde = recorde++;
        } else if( item < menor){
            var pior = pior++;
        }
    });

    console.log(`valor de recordes batidos ${recorde} e valor de piores partidas ${pior}`);
    
    
    // for (let i = 0; i < valor.length ; i++){
        
    //     if(valor[i] > 0){
            
    //         for( let val = 0; val < valor[i].value();val++){

    //         }

    //     };
        
        
    //     console.log(valor[i]);

    // }

}


console.log(verificaProgresso(pontuacoes));