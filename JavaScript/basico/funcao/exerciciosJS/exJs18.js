/**18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */


function leitor(numero) {
    var recebido = numero;

    if (isNaN(recebido) == false) {
        if ((recebido <= 10) && (recebido >= 0)) {
            switch (recebido) {
                case 0:
                    console.log('Corresponde ao numero ... zero')
                    break;
                case 1:
                    console.log('Corresponde ao numero ... um')
                    break;
                case 2:
                    console.log('Corresponde ao numero ... dois')
                    break;
                case 3:
                    console.log('Corresponde ao numero ... três')
                    break;
                case 4:
                    console.log('Corresponde ao numero ... quatro')
                    break;
                case 5:
                    console.log('Corresponde ao numero ... cinco')
                    break;
                case 6:
                    console.log('Corresponde ao numero ... seis')
                    break;
                case 7:
                    console.log('Corresponde ao numero ... sete')
                    break;
                case 8:
                    console.log('Corresponde ao numero ... oito')
                    break;
                case 9:
                    console.log('Corresponde ao numero ... nove')
                    break;
                case 10:
                    console.log('Corresponde ao numero ... dez')
                    break;
                default:
                    console.log("o numero informado está fora do range de 0~10")
                    break;
            }
        }
    } else {
        console.log("o valor de enrada não corresponde a um número!")
    }
}
leitor(1);
leitor(2);
leitor(3);
leitor(4);
leitor(5);
leitor(6);
leitor(7);
leitor(8);
leitor(9);
leitor(10);
leitor(20);
leitor(0.1);
leitor('A');
