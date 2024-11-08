<div class="titulo">Atribuições</div>

<?php

$numero = 10;
echo '<br>' . $numero;
$numero = $numero - 3;
echo '<br>' . $numero;

$numero = $numero + 1.5;
echo '<br>' . $numero;

$numero--; // $numero = $numero - 1;
--$numero; // $numero = $numero - 1;
echo '<br>' . $numero;

$numero++; // $numero = $numero + 1;
++$numero; // $numero = $numero + 1;
echo '<br>' . $numero;

$numero = 20;
echo '<br>' . $numero;
$numero -= 5;
echo '<br>' . $numero;
$numero += 5;
echo '<br>' . $numero;

$numero *= 10;
echo '<br>' . $numero;

$numero /= 2;
echo '<br>' . $numero;

$numero %= 6;
echo '<br>' . $numero;

$numero **= 4;
echo '<br>' . $numero;

$numero .= 4;//concatenando
echo '<br>' . $numero;

$texto = 'Valor corresponde a um texto';
echo '<br>' . $texto;

$texto = $texto . ' e mais um texto';
echo '<br>' . $texto;

// $variavelInexistente = 'Valor corresponde a um texto';
echo '<br>' . $variavelInexistente;
var_dump($variavelInexistente);
$valor = $variavelInexistente ?? 'Variável inexistente';
echo '<br>' . $valor;