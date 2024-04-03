lista = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

par = lambda valor: valor % 2 == 0

print(f'teste par: {par(5)}')

pares = list(filter(par, lista))

print(pares)