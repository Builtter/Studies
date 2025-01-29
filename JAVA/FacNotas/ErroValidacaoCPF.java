public class ErroValidacaoCPF extends Throwable { 
    ErroValidacaoCPF ( String msg_erro ) {         
        super ( msg_erro ); 
    }  
    ErroValidacaoCPF ( String msg_erro , Throwable causa ) {         
        super ( msg_erro , causa ); 
    }    
     public void atribuiCausa (Throwable causa ) { 
        initCause (causa); 
    } 

    ErroValidacaoCPF eCPF = new ErroValidacaoCPF ( "Entrada invalida!" ); //válido
            eCPF.atribuiCausa(E_causa); 
            throw eCPF;
    
    
    // ErroValidacaoCPF eCPF = new ErroValidacaoCPF ( "Entrada invalida!"  , E_causa ); //válido
    //     throw eCNPJ;
}