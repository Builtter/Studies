// Loop com var → A variável criada para o contador permanece acessível mesmo fora do loop por se tratar de var

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log('i = ', i);

console.log(`

--------- teste com let----------

`);

// O mesmo não ocorre quando utilizamos LET, por somente fica acessível dentro do escopo inserido

// for (let ih = 0; ih < 10; ih++) {
//     console.log(ih);
// }
// console.log('ih = ', ih);



const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]();
funcs[8]();

const funcs2 = [];

for (let ih = 0; ih < 10; ih++) {
    funcs2.push(function () {
        console.log(ih)
    })
}

funcs2[9]();
funcs2[2]();
funcs2[8]();
