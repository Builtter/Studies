<div class="titulo">Break/Continue</div>

<?php
$cont = 15;
for(;;) {
    $cont++;
    if ($cont > 20) {
        break;
    }
    echo "$cont <br>";
}
echo "Finish break<br>";
echo "<br><hr>";


for(;;) {
    $cont++;
    if ($cont % 2 == 1) {
        continue;
    }
    echo "$cont <br>";
    if ($cont >= 30) {
        break;
    }
}

echo "Finish continue/break<br>";
echo "<br><hr>";

foreach(array(1,2,3,4,5,6,7,8,9) as $valor) {
    if ($valor == 5) {
        continue;        
    }
    echo "$valor <br>";
}