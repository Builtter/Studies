<div class="titulo">Variáveis</div>

<?php
$numero = 10;

echo $numeroa, '<br>';
var_dump($numero);
echo '<br>';

$a = 4;
$b = 18;
$soma = $a + $b;

echo $soma, '<br>';
echo '<br>';

echo isset($soma), '<br>';
echo '<br>';    
unset($soma);//limpa a variável

var_dump($soma);
echo '<br>';

$var = 10;

echo $var, '<br>';
echo '<br>';

$var = 'String agora';
echo $var, '<br>';
echo '<br>';

echo '<p>Regra de nomenclatura:</p>';    

$var = 'válido';
$var_2 = 'válido';
$VAR = 'válido';
$_var_ = 'válido';
$vâr = 'válido';//válida mas não recomendado por possibilidade de conflitos em linguagens e sistemas operacionais diferentes
//$1var = 'vazio';
//$%var = 'vazio';
//$var% = 'vazio';

echo'<br>';
echo '<br><a target="_blank" href="https://www.php.net/manual/pt_BR/reserved.variables.php#:~:text=Vari%C3%A1veis%20pr%C3%A9%2Ddefinidas%20%C2%B6,o%20script%20no%20ambiente%20CLI.">Variáveis pré-definidas</a><br>';