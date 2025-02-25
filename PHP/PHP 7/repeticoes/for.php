<div class="titulo">Laço For</div>

<?php

for ($cont = 1; $cont <= 5; $cont++) {
    echo "$cont <br>";
}

echo "<br>";
echo "<hr>";

$array = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];

for ($dia = 0; $dia < count($array); $dia++) {
    echo "$array[$dia] <br>";
}

echo "<br>";
echo "<hr>";

$matriz = [
    [1, 2, 3],
    [4, 5],
    [7, 8, 'z']
];

for ($linha = 0; $linha < count($matriz); $linha++) {
    for ($coluna = 0; $coluna < count($matriz[$linha]); $coluna++) {        
        echo "{$matriz[$linha][$coluna]} ";
    }
    echo "<br>";
}