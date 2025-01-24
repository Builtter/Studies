public class Base {
    private String linguagem = "JAVA ";
    public void desvio (){    
        switch ( linguagem ) {
            case ( "C" ):
                    System.out.println("Suporta apenas programação estruturada");
                    break;
            case ( "C++" ):
                    System.out.println("Suporta programação estruturada e orientada a objeto");
                    break;
            case ( "JAVA "):
                    System.out.println("Suporta apenas programação orientada a objeto");
                    break;
            default:
                    System.out.println("Erro!");
                    break;
        }
    }
} 