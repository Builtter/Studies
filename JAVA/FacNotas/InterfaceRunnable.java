public class MinhaClasse implements Runnable{
    @Override
    public void run(){
        for (int i = 0; i < 10; i++){
            try{
                Thread.sleep(1000);
            }catch (InterruptedException e ){}
        }
        System.out.println("DONE!");
    }
}
MinhaClasse x = new MinhaClasse();
new Thread(x).start();