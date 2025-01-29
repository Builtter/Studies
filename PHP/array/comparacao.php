<div class="titulo">Comparação Arrays</div>


<?php

$lista1 = ['idade'=>20, 'nome'=>'Guilherme'];
$lista2 = ['idade'=>20, 'nome'=>'Guilherme'];
var_dump($lista1 == $lista2);
echo '<br>';
var_dump($lista1 === $lista2);
echo '<br>';
$lista3 = ['nome'=>'Guilherme', 'idade'=>20];
echo '<br>';
var_dump($lista1 == $lista3);
echo '<br>';
var_dump($lista1 === $lista3);
echo '<br>';
echo '<br>';
var_dump($lista1 != $lista3);
echo '<br>';
var_dump($lista1 !== $lista3);
echo '<br>';
echo '<br>';
$lista4 = [ 'idade'=>'20','nome'=>'Guilherme'];
var_dump($lista1 == $lista4);
echo '<br>';
var_dump($lista1 === $lista4);
echo '<br>';
var_dump($lista1 != $lista4);
echo '<br>';
var_dump($lista1 !== $lista4);
echo '<br>';
