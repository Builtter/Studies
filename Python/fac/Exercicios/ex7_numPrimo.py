def primo(n):
    if n < 2:
        return False
    i = n // 2
    while i > 1:
        if n % i == 0:
            return False
        i -= 1
    return True


def imprimir_resultado(numero, resultado):
    msg = f'O numero {numero} não é primo'
    if resultado:
        msg = f'o numero {numero} é primo'
    return msg


numero = 7
resultado = primo(numero)
msg = imprimir_resultado(numero, resultado)
print(msg)
