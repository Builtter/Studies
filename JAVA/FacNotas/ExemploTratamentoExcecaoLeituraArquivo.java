import java.io.BufferedReader;//ler arquivos de texto de forma eficiente
import java.io.FileReader;//ler arquivos de texto de forma simples
import java.io.IOException;//tratamento de exceções input output

public class ExemploTratamentoExcecaoLeituraArquivo {
    public static void main ( String args [ ] ){
        BufferedReader leitor = null;
            
        try{
            //Abrir Arquivo
            leitor = new BufferedReader (new FileReader("entrada.txt"));
            //Leitura do conteúdo do arquivo
            String linha;
            
            while ((linha = leitor.readLine()) != null){
                //Processe cada linha do arquivo
                System.out.println(linha);
            }
        }catch (IOException e){
            //Trata uma exceção de IO
            System.out.println("Ocorreu um erro durante a leitura do arquivo: " + e.getMessage());//entrará aqui por não existir arquivo entrada.txt
        }finally{
            //Fechamento do arquivo no bloco finaly
            try{
                if(leitor != null){
                    leitor.close();
                }
            }catch (IOException e ){
                System.out.println("Ocorreu um erro durante o fechamento do arquivo: " + e.getMessage());
            }
        }
    }    
} 
//Ocorreu um erro durante a leitura do arquivo: entrada.txt (No such file or directory)