const nomeDoMes = num => {
    switch (num) {
        case 1:
            console.log('Janeiro')
            break;
        case 2:
            console.log('Fevereiro')
            break;
        case 3:
            console.log('março')
            break;
        case 4:
            console.log('abril')
            break;
        case 5:
            console.log('maio')
            break;
        case 6:
            console.log('junho')
            break;
        case 7:
            console.log('julho')
            break;
        case 8:
            console.log('agosto')
            break;
        case 9:
            console.log('setembro')
            break;
        case 10:
            console.log('outubro')
            break;
        case 11:
            console.log('novembro')
            break;
        case 12:
            console.log('dezembro')
            break;    
        default:
            console.log("range permitido de 1 a 12")
            break;
    }
}

nomeDoMes(1);
nomeDoMes(12);
nomeDoMes(7);
nomeDoMes('a');
nomeDoMes(13);
