<div class="titulo">Constantes</div>

<?php
define('TAXA_DE_JUROS', 5.9);

echo TAXA_DE_JUROS . '<br>';

const NOVA_JUROS = 2.9;

echo NOVA_JUROS . '<br>';

$valorVariavel = 10;
// define('TAXA_DE_JUROS', $valorVariavel);// erro

echo TAXA_DE_JUROS + 1;
echo '<br>';
echo '<br>' . PHP_INT_MAX, '<br>';
echo '<br>' . PHP_VERSION, '<br>';
echo '<br> Linha: ' . __LINE__ . '<br>';
echo '<br> Arquivo: ' . __FILE__ . '<br>';
echo '<br> Diretório: ' . __DIR__ . '<br>';
