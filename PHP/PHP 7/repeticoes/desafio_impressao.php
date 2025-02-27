<div class="titulo">Desafio Impressão</div>

<?php

$array = [
    "AAA",
    "BBB",
    "CCC",
    "DDD",
    "EEE",
    "FFF",
];

foreach($array as $key => $valor) {
    if($key % 2 == 1) {
        continue;
    }
    echo "$valor <br>";
}

echo "Com foreach<br>";
echo "<br><hr>";

for($i = 0; $i < count($array); $i++) {
    if($i % 2 == 1) {
        continue;
    }
    echo "$array[$i] <br>";
}

echo "Com for<br>";
echo "<br><hr>";