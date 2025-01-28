public class TratamentoExcecaoExplicita {
    public static int getElemento (int i, int [] vet){
        try{
            if (i<0 || i>3){
                throw new IllegalAccessException ();
            }
        }catch(Exception e){
            System.out.println("Erro: Índice fora dos limites do vetor.");
        }
        return vet[i];
    }
    
    public static void main (String[] args){
        int [] vetor = {10, 20, 30, 40, 50 }; /* vetor = {10, 20, 30, 40, 50, 60 }; aqui não gera erro porque o vetor tem 5 elementos*/
        int x = getElemento(5, vetor);
        System.out.println("O elemento na quinta posição do vetor é: " + x);
    }
}