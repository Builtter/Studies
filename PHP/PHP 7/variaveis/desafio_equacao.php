<div class="titulo">Desafio Equação</div>

<?php

$a = 6;
$b = 3;
$c = 2;
$d = 5;
$e = 7;
$f = 10;
$g = 1;

$fra1 = (($a * ($b + $c)) ** $c) / ($b * $c); //correto
$fra2 = ((($g - $d) * ($c - $e)) / $c) ** $c; //correto
$numerador = ($fra1 - $fra2) ** $b;//correto
$denominador = $f ** $b;//correto
$res = $numerador / $denominador;//correto
echo $res;
