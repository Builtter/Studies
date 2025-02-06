// Programa 11 - imprime o valor da variável num
#include <stdio.h>
int num = 20;
int main()
{
    int num;
    num = 10;// variáveis locais possuem maior prioridade em detrimento a variáveis Globais dentro de procedimentos
    printf("O valor da variavel num: %d", num);
    return 0;
}