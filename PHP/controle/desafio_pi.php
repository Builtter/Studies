<div class="titulo">Desafio PI</div>

<?php

echo pi();
echo "<br>";   
$pi = 3.14;

if ($pi=== pi()) {
    echo "<br>Iguais";
}else{
    echo "<br>Diferentes<br>";
}

echo "<p style='margin-bottom: -50px;'>Resposta</p><br> <hr>";


echo "Dif: " . ($pi - pi()) . "<br>";

if (($pi - pi()) <= 0.001) {
    echo "Iguais";
}else{
    echo "Diferentes";
}