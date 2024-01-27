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