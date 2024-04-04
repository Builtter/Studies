def par(n):
    r = (n % 2 == 0)
    return r


def somarPares(array):
    total = 0
    for item in array:
        if par(item):
            total += item
    return total


listaTratavel = [10, 2, 5, 7, 6, 3]

somatorio = somarPares(listaTratavel)
print('somatorio de valores pares corresponde a {}'.format(somatorio))
