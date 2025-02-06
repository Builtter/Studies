Elemento pop(void)
{
    Elemento valor_recuperado;
    if (topo >= 0)
    {
        valor_recuperado = pilha[topo];
        topo--;
        return valor_recuperado;
    }
    else
        return NULL; // falha
}

int pop(void)
{
    No *aux;
    Elemento elemento_recuperado;
    if (topo != NULL)
    {
        elemento_recuperado = topo->elemento;
        aux = topo;
        topo = topo->prox;
        free(aux);
        return elemento_recuperado;
    }
    else
        return NULL;
}