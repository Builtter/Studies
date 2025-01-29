public class Principal { 
    public static void main ( String args [ ] ) { 
        char[] op1 = { 'J' , 'A' , 'V' , 'A' , '.' }; 
        char[] op2 = new char [4]; 
        System.out.println ( copiarArray ( op1 , op2 ) );         
    }     
    private static char[] copiarArray ( char[] op1 , char[] op2 ) { //copia o vetor op1 para op2 
        try { 
            if ( verificarOperandos ( op1 , op2 ) && verificarTamanhoOperandos ( op1 , op2 ) ) { 
                System.arraycopy ( op1 , 0 , op2 , 0 , op1.length ); 
                return op2; 
            } else 
                System.out.println( "A operacao nao pode ser realizada!" ); 
        } catch ( NullPointerException e ) { 
            System.out.println ( "Ponteiro para objeto nulo!" ); 
            System.out.println ( e.getMessage() ); 
            System.exit ( -1 ); 
        } catch ( ArrayIndexOutOfBoundsException e ) { 
            System.out.println ( "Tentativa de extrapolar o limite do vetor!" ); 
            System.out.println ( e.getMessage() ); 
            System.exit ( -1 ); 
        } 
        return null; 
    } 
    private static boolean verificarOperandos ( char[] op1 , char[] op2 ) throws ErroOperando , NullPointerException { 
        boolean check = false; 
        if ( ( op1 == null ) && ( op2 == null ) ) 
            throw new ErroOperando ( "Ambos operandos sao nulos!" ); 
        else if ( op1 == null ) 
            throw new ErroOperando ( "Primeiro operando eh nulo!" ); 
        else if ( op2 == null ) 
            throw new ErroOperando ( "Segundo operando eh nulo!" ); 
        else 
            check = true; 
        return check; 
    } 
    private static boolean verificarTamanhoOperandos ( char[] op1 , char[] op2 ) { 
        if ( op1.length > op2.length ) { 
            System.out.println ( "Os tamanhos dos vetores são incompativeis! "); 
            throw new ErroOperando ( new ArrayIndexOutOfBoundsException ( "ESPACO INSUFICIENTE NO SEGUNDO OPERANDO!" ) ); 
        } else     
            return true; 
    } 
}
class ErroOperando extends NullPointerException { 
    ErroOperando ( String msg_erro ) { 
        super ( msg_erro ); 
    }     
    ErroOperando ( Throwable causa ) { 
        initCause ( causa ); 
    }         
    @Override 
    public String toString ( ) { 
        return "Operando nulo: " + this.getMessage(); 
    } 
} 

/*
Os tamanhos dos vetores são incompativeis! 
Ponteiro para objeto nulo!
null
*/
