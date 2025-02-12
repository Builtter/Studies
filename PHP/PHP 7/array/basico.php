<div class="titulo">Array Básico</div>

<?php

$lista = array(1,2,3.4,"TEXTO");

print_r($lista);

echo "<br>";

echo "<br>" . $lista[0];
echo "<br>" . $lista[1];
echo "<br>" . $lista[2];
echo "<br>" . $lista[3];

echo "<br>";

print_r($lista);
echo "<br>";

$lista[0] = "Alterado";

echo "<br>";

$lista[] = "Outro elemento";

echo "<br>";

print_r($lista);