int busca_binaria(int lista[], int elemento, int inicio, int fim)
{
    int meio = floor((fim + inicio) / 2);
    if ((inicio == fim) && (lista[meio] != elemento))
        return -1;
    else if (lista[meio] == elemento)
        return meio;
    else if (elemento < lista[meio])
        busca_binaria(lista, elemento, inicio, meio);
    else
        busca_binaria(lista, elemento, meio + 1, fim);
}