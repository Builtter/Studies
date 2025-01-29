import java.io.IOException;

public class EncadeamentoExcecao {
    
    public static void main ( String [] args ) {
        try {
            abrirArquivo();
            
        } catch (AbrirArquivoExcecao e){
            System.out.println ( "Um erro ocorreu na tentativa de abrir o arquivo: " + e.getMessage());
            System.out.println ( "Cauza raiz: " + e.getCause().getMessage() );
        }
    }
    public static void abrirArquivo() throws AbrirArquivoExcecao{
        try{
            //simula exceção ao abrir arquivo
            throw new IOException("Incapaz de abrir o arquivo.");
        } catch (IOException e){
            //envolvendo uma exceção capturada em uma exceção personalizada
            throw new AbrirArquivoExcecao("ocorreu um erro ao abrir o arquivo.", e);
        }
    }  
}

class AbrirArquivoExcecao extends Exception{
    public AbrirArquivoExcecao(String mensagem, Throwable causa){
        super(mensagem, causa);
    }
}