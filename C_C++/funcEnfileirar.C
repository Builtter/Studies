int enfileirar(Elemento elemento)
{
    if (!((inicio == 0 && fim == MAX_FILA - 1) || (inicio == fim + 1)))
    {
        if ((fim == MAX_FILA - 1) || (fim == -1))
        {
            fila[0] = elemento;
            fim = 0;
            if (inicio == -1)
                inicio = 0;
        }
        else
        {
            fila[++fim] = elemento;
            return 1; // sucesso
        }
        else return 0; // falha
    }
}

int enfileirar(Elemento elemento)
{
    No *novo_no = (No *)calloc(1, sizeof(No));
    novo_no->elemento = elemento;
    novo_no->prox = NULL;
    if (novo_no != NULL)
    {
        if (fim != NULL)
            fim->prox = novo_no;
        else
        {
            inicio = novo_no;
            fim = novo_no;
            return 1; // sucesso
        }
        else return 0; // falha
    }
}    