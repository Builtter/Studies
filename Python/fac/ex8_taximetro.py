def taximetro(distancia, multiplicador=1):
    largada = 3
    km_rodado = 2
    valor = (largada + distancia *
    km_rodado) * multiplicador
    return valor


pagamento = taximetro(3.5)
pagamento2 = taximetro(3.5, 2)
print(pagamento)
print(pagamento2)
