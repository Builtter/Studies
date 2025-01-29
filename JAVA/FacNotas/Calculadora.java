import java.util.Scanner;

public class Calculadora {
    public int divisao ( int dividendo , int divisor )
    {
        try {
            if ( divisor == 0 )
                throw new ArithmeticException ( "Divisor nulo." );
        }
        catch (Exception e)
        { 
            System.out.println( "ERRO: Divisão por zero! " + e.getMessage() );
            return 999999999;            
        }
        return dividendo / divisor;
    }
    
    public static void main ( String args [ ] ) {
        int dividendo, divisor;
        String controle = "s";
	        
        Calculadora calc = new Calculadora ( );
        Scanner s = new Scanner ( System.in );
        do {    
            System.out.println ( "Entre com o dividendo." );
            dividendo = s.nextInt();
            System.out.println ( "Entre com o divisor." );
            divisor = s.nextInt();
            System.out.println ( "O quociente é: " + calc.divisao ( dividendo , divisor ) );
            System.out.println ( "Repetir?" );
            controle = s.next().toString();
        } while ( !controle.equals( "n" ) );
        s.close();
    }  
}