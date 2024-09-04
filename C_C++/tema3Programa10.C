// Programa 10 - soma dois numeros
#include <stdio.h>
int num3;
int main()
{
    int num1, num2;
    num1 = 10;
    num2 = 20;
    num3 = num1 + num2;//A variável num3 não foi declarada no escopo main, sim fora dele, tornano a Global
    printf("%d + %d = %d", num1, num2, num3);
    return (0);
}