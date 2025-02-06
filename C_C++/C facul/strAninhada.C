typedef struct {
	tipo membro_1;
	tipo membro_2;
	...
	tipo membro_n;
	struct{
		tipo membro_interno_1;
		tipo membro_interno _2;
		...
		tipo membro_interno _n;
	}
} Nome_estrutura;
Nome_estrutura NE;

//Para atribuir valores:
NE.membro_interno_1 = 0;
NE.membro_1 = 0;
 
//Para leitura do teclado:
&NE.membro_interno_1
&NE.membro_1

//Para impressão:
NE.membro_interno 1
NE.membro_1

typedef struct {
	tipo membro_1;
	tipo membro_2;
	...
	tipo membro_n;
} nome_estrutura_1;
	
typedef struct {
	tipo membro_1;
	tipo membro_2;
	nome_estrutura_1 NE1;
	...
	tipo membro_n;
} nome_estrutura_2;
	
nome_estrutura_2 NE2;

//para acessar os membros
NE2.membro1;
NE2.membro2;
NE2.NE1.membro1;
NE2.NE1.membro2;