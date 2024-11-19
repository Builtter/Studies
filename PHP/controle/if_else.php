<div class="titulo">if/else</div>

<?php

if (true) {//sempre será trabalhando no booleano, retornando verdadiro ou falso independente da condição
    echo "A condição foi verdadeira<br>";
} 

if (false) {
    echo "A condição foi verdadeira<br>";
} else {
    echo "A condição foi falsa<br>";
}

if (false) {
    echo "A condição foi verdadeira<br>";
} else if (false) {
    echo "A condição foi falsa<br>";
} else {
    echo "Nenhuma condição foi verdadeira<br>";
}