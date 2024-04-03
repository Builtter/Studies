# script funcao_map.py
lista = [1, 2, 3, 4, 5]

def triplica(item):
    return item * 3

def main():
    nova_lista = map(triplica, lista)
    print(nova_lista)
    print(list(nova_lista)) # → List transforma o espaço de memoria em uma lista legivel

if __name__ == "__main__":
    main()
