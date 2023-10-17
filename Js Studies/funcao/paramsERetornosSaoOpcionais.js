function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    } else {
        return area;
    }
    // return area; → Caso definido para retornar valor ao finalizar, do contrário, retornará undefined
}

console.log(area(2, 2));
console.log(area(2)); // largura * undefined → NaN
console.log(area(2, 4, 5, 6));
console.log(area(5, 5));


