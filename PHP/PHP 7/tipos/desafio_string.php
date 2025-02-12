<div class="titulo">Desafios Strings</div>

<?php


echo "Encontrando o 'abc' dentro da string '!AbcaBcabc' retorne 1 caso esteja contida na string <br><br>";
echo str_contains('!AbcaBcabc', 'abc');

echo "<br><br>";
echo strpos('!AbcaBcabc', 'abc') . "<br><br>";
echo stripos('!AbcaBcabc', 'abc') . "<br><br>";