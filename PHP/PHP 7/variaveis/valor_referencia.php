<div class="titulo">Valor Vs Referencia</div>

<?php
$var = "Val inicial";
echo "<br>$var";

//Atribuição por valor
$valVar = $var;
echo "<br>$valVar";
$valVar = "Val alterado";
echo "<br>$valVar";
echo "<br>";


//Atribuição por referencia
echo "<br>$var";

$varReferencia = &$var;
$varReferencia = "Val alterado";
echo "<br>$varReferencia";
echo "<br>$var";
