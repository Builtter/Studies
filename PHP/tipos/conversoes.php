<div class="titulo">Conversões</div>


<?php
echo is_int(PHP_INT_MAX);
echo "<br>";

echo var_dump(PHP_INT_MAX + 1);//passou os inteiros e passou para o float
echo "<br>";

var_dump(1 + 1.1);//passou os inteiros e passou para o float
echo "<br>";

var_dump((float)3);//passou os inteiros e passou para o float
echo "<br>";


echo '<p>Float para Inteiro:</p>';

var_dump((int)1.1);//passou os inteiros e passou para o float
echo "<br>";

var_dump(intval(2.88));
echo "<br>";

var_dump(round(2.88));// round arredonda para o inteiro mais prático mas possui tipo float
echo "<br>";

var_dump((int) round(2.88));// força a conversão para inteiro
echo "<br>";

echo '<p>Strings:</p>';

var_dump(3 + "2");
echo "<br>";

var_dump(3 . "2");
echo "<br>";

var_dump('<br>', is_string(3 . "2"));
echo "<br>";

var_dump(1 + "2 dois");    
echo '<br>';

var_dump(1 + "-3.2e2");
echo '<br>';

var_dump((int) "10.5");
echo '<br>';

var_dump((float) "10.5");
