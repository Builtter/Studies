let valores = [];
const addValor = (x) => {
    valores.push([valores.length+1,x]);
}

const media = () => {
    let soma = 0;
    for (x of valores){
        soma += x[1];
        return soma/valores.length;
    }
}

const drowBasic = () => {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Pos');
    data.addColumn('number', 'X');
    data.addRows(valores);
    var options = {hAxis: {title: 'Posicao'}, vAxis: {title: 'Valor de X'}};

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}