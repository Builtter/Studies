@Test
public void whenCallIsDaemon_thenCorrect(){
    
    NewThread daemonThread = new NewThread();
    NewThread userThread = new NewThread();
    
    daenonThread.setDaemon(true);
    daemonThread.start();
    userThread.start();
    
    assertTrue(daemonThread.isDaemon());
    assertFalse(userThread.isDaemon());
}