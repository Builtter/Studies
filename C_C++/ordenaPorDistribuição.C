//Cemanticamente falando

ordenacaoPorDistribuicao ( int m , int n , int Entrada [ ] )
int nr_digito = m - 1 , aux
int Fila [ nr_digito ]
para i = 0 até i < m - 1
	para j = 0 até n - 1
		aux = o i-ésimo digito menos significativo de Entrada [ j ]
		Fila [ aux ] = Entrada [ j ]
	j = 1
para aux = 0 até m - 1
	enquanto Fila [ aux ] tiver elemento não processado
		Entrada [ j ] = Fila [ aux ]
		j++