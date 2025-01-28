public class TratamentoExcecaoImplicita {
    
    public static void main (String[] args){
        int quociente, dividendo = 10, divisor = 0;
        try{
            if(divisor == 0){
                throw new ArithmeticException ("O divisor é zero.");
            }
            quociente = dividendo / divisor;
        } catch (Exception e){
            System.out.println("Erro: Divisão por zero: " + e.getMessage());
        }
    }
}