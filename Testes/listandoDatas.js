listaDiasRetroativos: function (){
    var qtDias = 15;
    var select = document.getElementById('dtresultado');
    var currentDate = new Date();

    for (var i = 1; i <= qtDias; i++) {
        var optionDate = new Date(currentDate);
        optionDate.setDate(currentDate.getDate() - i);

        var day = String(optionDate.getDate()).padStart(2, '0');
        var month = String(optionDate.getMonth() + 1).padStart(2, '0');
        var year = optionDate.getFullYear();
        var formattedDate = day + '/' + month + '/' + year;

        var option = document.createElement('option');
        option.value = formattedDate;
        option.text = formattedDate;
        select.add(option);
    }
  }
//Formatação de numeros com virgula
function formataCotacao (data) {
    var cotacao = parseFloat(data.replace(',', '.')).toFixed(2);
        
    //separando decimal de inteiro
    var partes = cotacao.split('.');
    var inteiro = partes[0];
    var decimal = partes.length > 1 ? ',' + partes[1] : '';

    //verifica tamanho do inteiro
    if (inteiro.length > 3) {
      //aplica separador
      inteiro = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return inteiro + decimal;
  }

console.log(formataCotacao('1.5'));      // Saída: "1,50"
console.log(formataCotacao('1,5'));      // Saída: "1,50"
console.log(formataCotacao('1500'));     // Saída: "1.500,00"
console.log(formataCotacao('12345.67')); // Saída: "12.345,67"
console.log(formataCotacao('1000000'));  // Saída: "1.000.000,00"