<div class="titulo">Switch Case</div>

<?php

// Usando if/else

$categoria = 'Luxo';
$preco = '0.0';
$carro = '';


if ($categoria === 'Luxo') {
    $preco = '250000';
    $carro = 'Mercedes';
} elseif ($categoria === 'SUV') {
    $preco = '80000';
    $carro = 'Renegate';
} elseif ($categoria === 'Sedan') {
    $preco = '15000';
    $carro = 'Etios';
} else {
    $preco = '33000';
    $carro = 'Mobi';
}

$precoFormatado  = number_format($preco, 2, ',', '.');

echo "<p>Categoria: $categoria  <br>Carro: $carro <br>Preço: $precoFormatado <br></p>";

// com switch
echo "Com switch: <br>";

switch (strtolower($categoria)) {
    case 'luxo':
        $preco = '250000';
        $carro = 'Mercedes';
        break;
    case 'suv':
        $preco = '80000';
        $carro = 'Renegate';
        break;
    case 'sedan':
        $preco = '15000';
        $carro = 'Etios';
        break;
    default:
        $preco = '33000';
        $carro = 'Mobi';
        break;
};

echo "<p>Categoria: $categoria  <br>Carro: $carro <br>Preço: $precoFormatado <br></p>";