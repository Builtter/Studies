const schedule =require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 1', function(){ // (*/5) a cada 5 segundos * 16 (sempre na hora 16) * * (qualuer mes e ano) 1 [0 domingo 6 sabado]
    console.log('Executando tarefa 1', new Date().getSeconds());
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('cancelando tarefa 1');
}, 20000);

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1,5)];
regra.hour = 16;
regra.second = 30; // sempre que segundo for 30, regra será executada

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2', new Date().getSeconds());
})