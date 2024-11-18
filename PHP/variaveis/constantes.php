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
?>

<div class="btn btn-box links btn-flex-position">
    <button><a href="https://www.php.net/manual/pt_BR/language.variables.php" target="_blank" rel="noopener noreferrer">Variáveis </a></button>
    <button><a href="https://www.php.net/manual/pt_BR/language.variables.variable.php" target="_blank" rel="noopener noreferrer">Variáveis variáveis </a></button>
    <button><a href="https://www.php.net/manual/pt_BR/language.types.string.php#language.types.string.parsing" target="_blank" rel="noopener noreferrer">Interpolação de strings </a></button>
    <button><a href="https://www.php.net/manual/pt_BR/function.constant.php" target="_blank" rel="noopener noreferrer">Constant </a></button>
    <button><a href="https://www.php.net/manual/pt_BR/language.references.pass.php" target="_blank" rel="noopener noreferrer">Passagem por referência </a></button>
</div>