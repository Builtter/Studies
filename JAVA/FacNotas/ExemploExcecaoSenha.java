public class ExemploExcecao {
    public static void main ( String[] args){
        
        System.out.println("Entre com uma senha: ");
        String senha = "aaaaaaa";
        
        try {
            ValidarSenha(senha);
            System.out.println("Senha válida!");
        } catch (SenhaInvalidaExcecao e){
            System.out.println("Senha inválida: " + e.getMessage());
        }
    }
    
    public static void ValidarSenha(String senha) throws SenhaInvalidaExcecao{
        if (senha.length() < 5){
            throw new SenhaInvalidaExcecao(" A senha deve conter pelo menos 5 caracteres.");
        }
        if (!senha.matches(".*\\d.*")){
            throw new SenhaInvalidaExcecao(" A senha deve conter pelo menos 1 dígito.");
        }
    }
        
}
class SenhaInvalidaExcecao extends Exception {
    public SenhaInvalidaExcecao(String mensagem){
        super(mensagem);
    }
}