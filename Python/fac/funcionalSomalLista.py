from functools import reduce

numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

somar = lambda x, y: x + y

resultado = reduce(somar, numero)

print(resultado)
