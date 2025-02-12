<div class="titulo">Operadores Relacionais</div>

<?php
echo "<p class='relacionais'>Relacionais if/else</p><br> <hr>";
$idade = null;
if ($idade == null || $idade < 0) {
    echo "Idade não informada.";
} elseif ($idade < 18) {
    echo "Menor de idade";
} elseif ($idade < 65) {
    echo "Adulto";
} elseif ($idade < 99) {
    echo "Jovem idoso";
} elseif ($idade >= 99) {
    echo "Ancião";
}

echo "<p class='relacionais'>Relacionais</p><br> <hr>";

echo "<p class='relacionais'>Spaceship</p><br> <hr>";
var_dump(5 <=> 4);//1 o da esquerda é maior
var_dump(4 <=> 5);//-1 o da direita é maior 
var_dump(5 <=> 5);//0 os dois sao iguais


echo "<p class='relacionais'>Valores V ou F</p><br> <hr>";
var_dump(!!5);//true
var_dump(!!0);//false
var_dump(!!"");//false
var_dump(!!" ");//true

?>

<style>
p {
margin-bottom: -50px;
}
hr {
margin-bottom: 10px;
}
</style>
