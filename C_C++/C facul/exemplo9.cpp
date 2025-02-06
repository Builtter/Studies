#define LEN 50

struct endereco
{
	char rua[LEN];
	char cidade_estado_cep[LEN];
};

struct student
{
	char id[10];
	int idade;
	struct endereco casa;
	struct endereco escola;
};

struct student pessoa;
