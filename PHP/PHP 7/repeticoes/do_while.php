<div class="titulo">Do/While</div>

<?php
    const VALOR_LIMITE = 5;

    $i = 1;
    do {
        echo "$i <br>"; 
        $i++;
    } while ($i <= 10);

    echo "<br>";
    echo "<hr>";

    $contador = 0;
    while ($contador < VALOR_LIMITE) {
        echo "While: $contador <br>";
        $contador++;
    };

    echo "<br>";
    echo "<hr>";

    $contador = 0;
    while(true){
        echo "While Infinito - Saída com break: $contador <br>";
        $contador++;
        if($contador >= VALOR_LIMITE) break;
    }