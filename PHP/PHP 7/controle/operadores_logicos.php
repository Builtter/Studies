<div class="titulo">Operadores Lógicos</div>

<?php

echo "<p class='divisao'>Negação Lógica</p><hr>";
var_dump(true);
echo '<br>';
var_dump(!true); // not

echo "<p class='divisao'>Tabela Verdade 'AND' (E)</p><hr>";
var_dump(true && true);
var_dump(true && false);
var_dump(false && true);
var_dump(false && false);
// var_dump(true && 3 > 2 && 7 <= 7 && 3 == '3');
echo "<br>";

var_dump(true and true);
var_dump(true and false);
var_dump(false and true);
var_dump(false and false);

echo "<p class='divisao'>Tabela Verdade 'OR' (OU)</p><hr>";
var_dump(true || true);
var_dump(true || false);
var_dump(false || true);
var_dump(false || false);
echo "<br>";
var_dump(true or true);
var_dump(true or false);
var_dump(false or true);
var_dump(false or false);

echo "<p class='divisao'>Tabela Verdade 'XOR' (OU Exclusivo)</p><hr>";//verdade quando apenas um dos dois valores for verdadeiro
var_dump(true xor true);
var_dump(true xor false);
var_dump(false xor true);
var_dump(false xor false);
echo "<br>";
var_dump(true != true);
var_dump(true != false);
var_dump(false != true);
var_dump(false != false);


echo "<p class='divisao'>Exemplo</p><hr>";
$idade = 60;
$sexo = 'F';

if ($idade >= 60 && $sexo == 'F') {
    echo "Pode aposentar -> $sexo";
} elseif ($idade >= 65 && $sexo == 'M') {
    echo "Pode aposentar -> $sexo";
} else {
    echo "Nao pode aposentar";
}

echo "<br>";

$pagouPrev = true;
$homemAposentado = ($idade >= 65 && $sexo == 'M');
$mulherAposentado = ($idade >= 60 && $sexo == 'F');
$criteriosAposentados = $homemAposentado || $mulherAposentado;
$podeAposentar = $pagouPrev && $criteriosAposentados;
echo "Pode aposentar -> $podeAposentar";




?>



