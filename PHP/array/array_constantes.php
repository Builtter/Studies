<div class="titulo">Arrays Constantes</div>

<?php
const FRUTAS = ["laranja", "abacaxi"];
//FRUTAS[0] = "banana";//ão é possível alterar um array constante
print_r(FRUTAS);

echo "<br>";
const CARROS = array("Fiat" => "Uno", "Ford" => "Fiesta", "Ferrari" => "F40");
echo '<br>' . CARROS["Fiat"];
echo '<br>' . CARROS["Ford"];
echo '<br>' . CARROS["Ferrari"];

echo "<br>";
define('CIDADES', array("Sao Paulo", "Rio de Janeiro", "Belo Horizonte"));
echo '<br>' . CIDADES[0];
echo '<br>' . CIDADES[1];
echo '<br>' . CIDADES[2];

// CIDADES[] = "Curitiba";//ao tentar adicionar um elemento a uma constante será gerado erro por se tratar de uma constante dento do php

