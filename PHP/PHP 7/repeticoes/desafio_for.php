<div class="titulo">Desafio Laço For</div>

<?php
echo "Resposta 1";
echo "<br>";

$comments = ['#','##','###','####','#####'];

for ($cont = 0; $cont <=count($comments); $cont++) {
    echo  $comments[$cont] . "<br>";
}

echo "<br>";
echo "<hr>";

echo "Resposta 2";
echo "<br>";

$comments = ['#','##','###','####','#####'];

for ($cont = 0; $cont <=count($comments);) {
    echo  $comments[$cont] . "<br>";
    $cont = $cont + 1;
    if ($cont == 5) {
        break;
    }
}

echo "<br>";
echo "<hr>";

echo "Resposta 3";
echo "<br>";

$print = '';
for ($cont = 1; $cont <= 5; $cont++) {
    $print .= '#';   
    echo  $print . "<br>";
}

echo "<br>";
echo "<hr>";

echo "Resposta 4";
echo "<br>";

for ($print = '#'; $print != '######'; $print .= '#') {
    echo  $print . "<br>";
}

echo "<br>";
echo "<hr>";