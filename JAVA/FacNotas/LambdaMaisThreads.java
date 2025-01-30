Thread[] threads = new Thread[10];
for (int i = 0; i<10;i++)
    (threads[i] = new Thread(()->{
        for(int j=1;j<100;j++)
            try{
                System.out.println(j);
                Thread.sleep(Math.round(
                            Math.random()*1000));
            }catch(Exception e){}
    })).start();
for (int i=0;i<10;i++)
    try{
        threads[i].join();
    }catch (Exception ex){}
System.out.println("ACABOU")