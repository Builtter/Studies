Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
        
    }
}

const aprovados = ['junior','tadeu','joaquin','hernane','peter'];

aprovados.forEach2(function(aluno, indicie){
    console.log(`${indicie +1} ${aluno} `);
});