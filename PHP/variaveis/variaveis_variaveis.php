<div class="titulo">Variaveis Variaveis</div>

<?php

$a = 'variavelA';
$$a = 'variavelAA';
echo "$a e {$$a} e {$$a} e $variavelA"; // gera uma variavel com base no valor recebino na variavel $a

echo "<br>";
$epa = 'opa';
$opa = 'vish';
$vish = 'Eita !!!!';
echo "$epa {$$epa} {$$$epa}"; // meu amigo