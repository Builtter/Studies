#include < stdio.h >
#include < stdlib.h >

struct cargo
{
	int cod;
	char descricao[30];
};

struct funcionario
{
	int cod;
	char nome[30];
	float salario;
	struct departamento
	{
		int cod;
		char descricao[30];
	};

	struct cargo cargo;
};

struct funcionario Funcionario;

int main(void)
{
}
