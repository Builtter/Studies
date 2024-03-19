qtd = int(input('Quantos produtos deseja levar? '))
precoBase = 10
desc10pct = 0.1
desc20pct = 0.2

if qtd >= 20:
    totalSemDesconto = qtd * precoBase
    desc = totalSemDesconto * desc20pct
    valorFinal = totalSemDesconto - desc
    print(f'total a pagar R${valorFinal} + desconto de 20%')
elif qtd >= 11:
    totalSemDesconto = qtd * precoBase
    desc = totalSemDesconto * desc10pct
    valorFinal = totalSemDesconto - desc
    print(f'total a pagar R${valorFinal} + desconto de 10%')
else:
    valorFinal = qtd * precoBase
    print(f'total a pagar R${valorFinal} sem desconto')