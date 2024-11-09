<div class="titulo">Interpolação</div>

<?php

$numero = 10;
echo '<br>' . $numero;
echo "<br> $numero";
echo '<br> $numero';

$texto = "Isso é uma string com $numero";
echo '<br>' . $texto;

$obj = 'caneta';
echo "<br>Eu tenho uma $obj";
echo "<br>Eu tenho uma {$obj}s";
echo "<br>Eu tenho 2 { $obj}s mas perdi 1 {$obj  }";