// Função de inserção de nó filho na subárvore direita.
int insere_filho_direita(char chave, int pai)
{
    if (arvore[pai] == NULL)
    {
        printf( “Erro : noh pai inexistente !” ) 
        return 0; // falha
    }
    else
        arvore[(pai * 2) + 2] = chave 
        return 1; // sucesso
}

// Função de inserção de nó filho na subárvore direita (alocação encadeada).
int insere_filho_direita(No novo_no, No *pai)
{
    if (pai == NULL)
    {
        printf( “Erro : noh pai inexistente !” ) 
        return 0; // falha
    }
    else
        pai->filho_dir = novo_no;
        return 1; // sucesso
}