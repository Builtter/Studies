<div class="titulo">Tipo String</div>


<?php

echo 'Isso é uma string';
echo '<br>';

echo "Isso também é uma string";
echo '<br>';
var_dump('Isso é uma string');
echo 'O var_dump mostra contabilizando o sinal com sendo um caractere devido ao encoding de caracteres especiais';
echo '<br>';
echo '<br>';

//concatenando strings
echo 'Isso é uma string' . ' concatenado' . "\n";
echo '<br>', 'Aqui também concatena','usando virgula';
echo '<br>';    

echo '<br>';    
echo "'teste' " . '"teste 2"' . '\'teste 3\' ' . "\"teste 4\" " . "\\";

print('<br>Print também funfa 1');
print '<br>Print também funfa 2';
    
echo '<br>'; 

// Algumas funções
echo '<br>' . strtoupper('maximizado');
echo '<br>' . strtolower('MINIMIZADO');
echo '<br>' . ucfirst('só a primeira letra');
echo '<br>' . ucwords('todas as palavras');
echo '<br>' . strlen('Quantas letras?');
echo '<br>' . mb_strlen("Eu também", "utf-8");
echo '<br>' . substr('So uma parte mesmo', 7);
echo '<br>' . substr('So uma parte mesmo', 7, 5);
echo '<br>' . str_replace('Isso', 'Aquilo', 'Isso é uma string. Isso');