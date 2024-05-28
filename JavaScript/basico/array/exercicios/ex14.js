function objParaArray(obj){
    
    var novoArray = [...Object.entries(obj)];

    return novoArray;
}
console.log(objParaArray({nome: 'Manga', tipo: 'fruta'}));

/*
objeto {}
array []
*/

