// Programa Ficha do Aluno
// Declara��o de Bibliotecas
#include <stdio.h> //Fun��es de I/O nos dispositivos stdin, stdout e files.
#include <conio.h> //Fun��es de manipula��o de caracteres na tela.

int main(void)
{
    //int matricula;
    //char nome[50];
    //float nota;

    //float notas[20]; //vetor de 20 posi��es
    //float montas[10][2]; //matriz de 10 linhas e 2 colunas

    //Declara��o da struct
    //struct <identificador>
    //{
    // <listagem dos tipos e membros>
    //}

    struct ficha_aluno
    {
        int matricula;
        char nome[50];
        char disciplina[30];
        float nota;
    };

    //Declara��o da vari�vel aluno do tipo struct ficha_aluno.
    struct ficha_aluno aluno;
    
    // Fun��o printf - impress�o em tela
    // Fun��o scanf - leitura de dados do teclado
    
    printf("\n Ficha do Aluno \n");
    
    printf("Matricula do aluno: ");
    scanf("%d", &aluno.matricula);
    
    printf("Nome do aluno: ");
    scanf("%s", &aluno.nome);
    
    printf("Disciplina do aluno: ");
    scanf("%s", &aluno.disciplina);
    
    printf("Informe a nota do aluno: ");
    scanf("%f", &aluno.nota);
    
    printf("\n Ficha do Aluno\n");

    printf("Matricula: %d\n", aluno.matricula);
    printf("Nome: %s\n", aluno.nome);
    printf("Disciplina: %s\n", aluno.disciplina);
    printf("Nota: %.2f\n", aluno.nota);
    
    system("PAUSE");
    return(0);
}
