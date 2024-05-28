const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("-------------------- Break -----------------") // Age em FOR WHILE SWITCH

for (x in nums) {
    if (x == 5) {
        break; // Interrompe o laço e parte para a próxima execução fora do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log("-------------------- Continue-----------------")


for (y in nums) {
    if (y == 5) {
        continue; // interrompe a repetição atual e parte para a pròxima, interrompendo o resultado atual
    }
    console.log(`${y} = ${nums[y]}`)
}



console.log("-------------------- Rotulos -----------------")


externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) {
            break externo;
        }
        console.log(`Par = ${a},${b}`)
    }
}