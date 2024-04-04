lista = [10, 2, 5, 7, 6, 3]
tamanhoLista = len(lista)
soma = 0

for i in range(tamanhoLista):
    if lista[i] % 2 == 0:
        soma += lista[i]

print(f'somatorio de itens igual a: {soma}')

################################
## modo 2

lista2 = [10, 2, 5, 7, 6, 3]
soma2 = 0

for num in lista2:
    if num % 2 == 0:
        soma2 += num
print(f'Somatorio 2 igual {soma2}')
