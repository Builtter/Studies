<div class="titulo">Mapa Array</div>

<?php
$dados = array (
    'idade' => 20,
    'nome' => 'Guilherme',
    'cor' => 'azul',
    'peso' => 70
);
print_r($dados);
echo '<br>';

print_r($dados['idade']);
echo '<br>';
print_r($dados['nome']);
echo '<br>';
print_r($dados['cor']);
echo '<br>';
print_r($dados['peso']);
echo '<br>';