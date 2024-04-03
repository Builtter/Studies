veiculos = ['aviao', 'moto', 'barco', 'carro']

f_minuscula = lambda palavra: str.upper(palavra)

nomes_maiusculos = list(map(f_minuscula, veiculos))

print(nomes_maiusculos)
