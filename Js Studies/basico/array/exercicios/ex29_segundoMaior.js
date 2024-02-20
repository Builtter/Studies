function segundoMaior (arr){
    var arrSort = arr.sort((a,b) => b - a)

    console.log(arrSort[1]);
}

array1 = [12,16,1,5];
array2 = [8,4,5,6];

segundoMaior(array1);
segundoMaior(array2);