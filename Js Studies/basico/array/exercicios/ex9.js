const repet = (objeto, vezes) =>{
    var res = [];

    for (let i = 0; i < vezes; i++) {
        res.push(objeto);
    }
    return res;
}

console.log(repet(1,3));