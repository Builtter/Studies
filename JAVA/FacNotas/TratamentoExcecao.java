public class TratamentoExcecao {
    public static int divisao (int dividendo, int divisor){
     return dividendo / divisor;   
    }
    
    public static void main (String[] args){
        try{
            int resultado = divisao(10,0);
            System.out.println("Resultado: " + resultado);
        } catch (ArithmeticException e){
            System.out.println("Erro: Divisão por zero");
        }
    }
}