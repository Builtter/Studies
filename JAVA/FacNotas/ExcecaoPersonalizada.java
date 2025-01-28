public class ExcecaoPersonalizada {
    public static void main ( String args [] ){
        try {
            int resultado = divisao (20,0);
            System.out.println("Resultado: " + resultado);
        } catch (ExcecaoPersonalizadaDivisaoPorZero e){
            System.out.println("Erro: " + e.getMessage());
        }
    }
    
    public static int divisao(int dividendo, int divisor)
        throws ExcecaoPersonalizadaDivisaoPorZero{
            if (divisor == 0){
                throw new ExcecaoPersonalizadaDivisaoPorZero("O divisor não pode ser zero");
            }
            return dividendo / divisor;
        }
}
class ExcecaoPersonalizadaDivisaoPorZero extends Exception {
    public ExcecaoPersonalizadaDivisaoPorZero(String mensagem){
        super(mensagem);
    }
}