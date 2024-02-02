function filtraSemelhante (alvo, ambiente){
    var novaLista = [];

    const fatia = (palavra) => palavra.slice(0,3) === alvo;

    for (item of ambiente){
        
        novaLista = ambiente.filter(fatia); 

    }

    console.log(novaLista);
}

var listaA = ["programação", "mobile", "profissional"]

filtraSemelhante("pro", listaA)
filtraSemelhante("pra", listaA)