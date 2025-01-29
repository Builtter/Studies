import java.util.ArrayList;//leitura de arrays
import java.util.List;//

public class ExemploEncadeamentoExcecoesListaNomes {
    public static void main ( String [ ] args ){

        try{
            List<String> lsNomes = new ArrayList<>();
            addNome(lsNomes, null);

            //mostrar nomes caso houver algum
            if(lsNomes.size() > 0){
                listarNomes(lsNomes);
            }
        }catch (nomeInvalidoExcecao e){
            System.out.println("Um erro ocorreu: " + e.getMessage());
            System.out.println("Causa raiz: " + e.getCause().getMessage());
        }
    }
    public static void addNome(List<String> nomes, String nome) throws nomeInvalidoExcecao {
        try{
            if(nome == null || nome.isBlank()){
                throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
            }
            nomes.add(nome);
        }catch(IllegalArgumentException e ){
            throw new nomeInvalidoExcecao("Foi detectado um nome inválido ", e);
        }
    }
    public static void listarNomes(List<String> nomes){
         System.out.println(nomes);
    }
} 
class nomeInvalidoExcecao extends Exception {
    public nomeInvalidoExcecao (String mensagem, Throwable causa){
        super(mensagem, causa);
    }
}