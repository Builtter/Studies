function media (arr){
    var qtItens = arr.length;
    var somatorio = 0;
    var med = 0;
    
    for (let item of arr){
        somatorio += item;
    }

    med = somatorio / qtItens;

    console.log(med);
}

var m1 = [0,10]
var m2 = [1,2,3,4,5]

media(m1)
media(m2)