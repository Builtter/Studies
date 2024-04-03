# script funcao_map_lambda.py
lista = [1, 2, 3, 4, 5]

nova_lista = map(lambda item: item * 3, lista)# função lambda

def main():
    print(list(nova_lista))

if __name__ == "__main__":
    main()