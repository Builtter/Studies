public abstract class Mamifero{
    public abstract void mamar();
}
public class Cachorro extends Mamifero{
    public void mamar(){
        System.out.println("Cachorro Mamando...");
    }
}
public class Gato extends Mamifero{
    public void mamar(){
        System.out.println("Gato Mamando...");
    }
}

Mamifero c = new Cachorro();
Mamifero g = new Gato();

Mamifero m = new Mamifero(){
    @Override
    public void mamar(){
        System.out.println("Genérico mamando...");
    }
};