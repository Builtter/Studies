nota = float(input('Digite um valor: '))
apro = 'Aprovado'
repr = 'Reprovado'
rec = 'Recuperação'

if nota > 7:
    print(apro)
elif nota >= 5:
    print(rec)
else:
    print(repr)