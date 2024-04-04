# est 1
def fatorial_iterativo(n):
    fat = 1
    for i in range(1, n + 1):
        fat = fat * i
    return fat


numero = 5
print(f'fatorial iterativo de {numero}: {fatorial_iterativo(numero)}')


# est 1
def fatorial_recursivo(n):
    if ((n == 0) or (n == 1)):
        return 1
    return n * fatorial_recursivo(n - 1)


numero = 5
print(f'fatorial recursivo de {numero}: {fatorial_recursivo(numero)}')
