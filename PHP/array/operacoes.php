<div class="titulo">Operações</div>

<?php
$dados = [
    "nome" => "Guilherme",
    "idade" => 20
];

$dados2 = [
    "naturalidade" => "Sao Paulo"
];

$dados2["endereço"] = "Rua 1";

//em caso de chaves repetidas, o valor a esquerda ($dados) sobrescreve o da direita ($dados2)
$dadosCompletos = $dados + $dados2;
print_r($dadosCompletos);

echo '<br>' . is_array($dadosCompletos); //verifica se $dadosCompletos e um array 1 = sim 0 = nao

echo '<br>' . count($dadosCompletos); //conta quantos elementos tem no array

echo '<br>' . array_keys($dadosCompletos); //retorna as chaves do array

echo '<br>' . array_values($dadosCompletos); //retorna os valores do array

echo '<br>' . in_array("Guilherme", $dadosCompletos); //verifica se o elemento esta no array

echo '<br>' . array_search("Guilherme", $dadosCompletos); //retorna a chave do elemento

$indice = array_rand($dadosCompletos); //retorna um indice aleatorio do array
echo '<br>' . $indice;
echo '<br>' . $dadosCompletos[$indice];

echo '<br>';

echo "{$dadosCompletos['nome']} tem ${dadosCompletos['idade']} anos"; //metodo obsoleto ${}, ainda funciona mas nao e recomendado

echo '<br>';
unset($dadosCompletos['nome']); //remove o elemento do array

print_r($dadosCompletos);
echo '<br>';

$impares = [1, 3, 5, 7, 9];
$pares = [0, 2, 4, 6, 8];
$todos = $impares + $pares;
print_r($todos); //uniao de arrays mas por usarem os mesmos indices, o primeiro($impares) elemento sobrescreve o anterior
echo '<br>';

//para fazer a união dos arrays sem sobrescrever os indices, usar array_merge
$todos2 = array_merge($impares, $pares);
print_r($todos2);
echo '<br>';

sort($todos2); //ordena o array alterando o mesmo array
print_r($todos2);
