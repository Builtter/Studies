Elemento desenfileirar(void)
{
    Elemento elem_temp;
    if (inicio != -1)
    {
        elem_temp = fila[inicio];
        if (inicio == fim)
            fim = inicio = -1;
        else if (inicio == MAX_FILA - 1)
            inicio = 0;
        else
        {
            inicio++;
            return elem_temp;
        }
        else return NULL; // falha
    }
}

Elemento desenfileirar(void)
{
    int elemento_recuperado;
    No *aux = inicio;
    if (inicio != NULL)
    {
        inicio = inicio->prox;
        if (inicio == NULL)
            fim = NULL;
        elemento_recuperado = aux->elemento;
        free(aux);
        return elemento_recuperado; // sucesso
    }
    else
        return NULL; // falha
}