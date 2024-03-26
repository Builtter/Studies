def menorElemento(lista):
    minimo = lista[0]
    for emelemento in lista:
        if emelemento < minimo:
            minimo = emelemento
    return minimo


listaTratavel = [2, 10, 3, 1, 4, 5]

menor = menorElemento(listaTratavel)
print('menor elemento da lista corresponde a {}'.format(menor))
