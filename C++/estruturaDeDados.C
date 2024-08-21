
// Estrutura 1
struct endereco x;

// Estrutura 2
struct
{
    char nome[30];
    char autor[50];
    int paginas;
    float preco;
} livro;

// Estrutura 3
struct livro
{
    char nome[30];
    char autor[50];
    int paginas;
    float preco;
} livro1, livro2, livro3;

struct endereco x = {"Av. das Américas", "4200", " 22640-102 ", "Barra da Tijuca"};

printf("%s", x.rua);

// Função strcpy (CPY = copiar; STR = string). A função copiará o que está dentro das aspas duplas para o campo STRING da estrutura.
aluno_especial.codigo = 10;
strcpy(aluno_especial.nome, "Manoel");
aluno_especial.nota = 10.0;

// É possível imprimir os valores dos campos da estrutura em qualquer parte do programa utilizando a função printf.
printf(" \n %d ", aluno_especial.codigo);
printf(" \n %s ", aluno_especial.nome);
printf(" \n %.2f ", aluno_especial.nota);

// Entretanto, se for preciso imprimir todos os membros da estrutura de uma única vez, é recomendável criar uma função para isto.
void imprimir(Aluno aluno_regular)
{ // Func
    printf(" \n %d ", aluno_especial.codigo);
    printf(" \n %s ", aluno_especial.nome);
    printf(" \n %.2f ", aluno_especial.nota);
}

imprimir(aluno_especial); // chamada func

void cadastrar(Aluno aluno_especial)
{
    printf(" Digite o código do aluno especial: ");
    scanf("%d%*c", &aluno_especial.codigo);
    printf(" Digite o nome do aluno especial: ");
    scanf("%s%*c", &aluno_especial.nome);
    printf(" Digite a nota do aluno especial: ");
    scanf("%f%*c", &aluno_especial.nota);
}