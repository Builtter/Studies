<div class="titulo">Desafio Switch</div>




<form action="#" method="post">
    <div>
        <div>
            <label for="conversao">Conversor de Unidades:</label>
        </div>
        <div>
            <input type="text" name="parametro">
            <select name="conversao" id="conversao">
                <option value="km-milha">Km - Milha</option>
                <option value="milha-km">Milha - Km</option>
                <option value="metro-km">Metro - Km</option>
                <option value="km-metro">Km - Metro</option>
                <option value="cel-far">Celsius - Fahrenheit</option>
                <option value="far-cel">Fahrenheit - Celsius</option>
            </select>
        </div>
    </div>
    <button name="converter">Converter</button>
</form>



<style>
    form * {
        font-size: 1.8rem;
    }
</style>

<?php
if (isset($_POST['converter']) && $_POST['parametro'] != '') {
    $conversao = $_POST['conversao'];
    $parametro = $_POST['parametro'];
    $milha = 1.6094;
    $metro = 1000;
    

    switch ($conversao) {
        case 'km-milha':
            $total = $parametro / $milha;
            $unidade = 'mi';
        case 'milha-km':
            $total = $milha * $parametro;
            $unidade = 'Km';
            break;
        case 'metro-km':
            $total =  $parametro / $metro;
            $unidade = 'Km';
            break;
        case 'km-metro':
            $total = $metro * $parametro;
            $unidade = 'M';
            break;
        case 'cel-far':
            $total = ($parametro * 1.8) + 32;
            $unidade = 'Fh';
            break;
        case 'far-cel':
            $total = ($parametro - 32) / 1.8;
            $unidade = 'C';
            break;
        default:
            $default = 'Nenhuma valor convertido!';
            break;
    };

    $totalFormatado = number_format($total, 2, ',', '.');
    echo "<p>Conversão selecionada: $conversao  <br> Valor inserido: $parametro <br> Distancia: $totalFormatado$unidade <br></p>";

}else{
    $default = 'Nenhuma valor convertido!';
    echo "<p> $default</p>";
}
