// Programa 12: soma dois numeros
#include <stdio.h>
// variável global
int num3;

// Função soma
int soma(int x, int y)
{
    int v_soma;
    v_soma = x + y;
    return (v_soma);
}

int main()
{
    int num1, num2;
    num1 = 10;
    num2 = 20;
    num3 = soma(num1, num2);
    printf("%d + %d = %d", num1, num2, num3);
    return 0;
}