<div class="titulo">ForEach</div>

<?php

$array = [100 =>"Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];

foreach ($array as $dia) {
    echo "$dia <br>";
}

echo "<br>";
echo "<hr>";

foreach ($array as $key => $dia) {
    echo "$key - $dia <br>";
}

echo "<br>";
echo "<hr>";

$matriz = [
    [1, 2, 3],
    [4, 5],
    [7, 8, 'z']
];

foreach ($matriz as $linha) {
    foreach ($linha as $coluna) {
        echo "$coluna ";
    }
    echo "<br>";
}

echo "<br>";
echo "<hr>";

$numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
foreach ($numeros as &$num) {
    $num *= 2;
    echo "$num <br>";
}