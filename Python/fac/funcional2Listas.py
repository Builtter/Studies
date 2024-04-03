lista_numeros = [9.56782, 7.57568, 3.00914, 6.2321]
lista_precisao = [2, 2, 3, 3]

arrendodando = lambda item1, item2: round(item1, item2)

resultado = list(map(arrendodando, lista_numeros, lista_precisao))

print(lista_numeros)
print(lista_precisao)
print(resultado)
