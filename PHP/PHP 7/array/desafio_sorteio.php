<div class="titulo">Desafio Sorteio</div>

<?php
$personagens= [
    'Goku',
    'Vegeta',
    'Trunks',
    'Piccolo',
    'Krillin',
    'Gohan',
    'Goku Black',
    'Roronoa Zoro',
    'Naruto Uzumaki',  
    'Sasuke Uchiha',
    'Sakura Haruno',
    'Eren Yeager',
    'Mikasa Ackerman',
    'Luffy D. Monkey',
    'Nami',
    'Sanji',
    'Robin',
    'Usopp',
    'Shopper',
    'Saitama'
];

shuffle($personagens);//embaralha o array
$aleatorio = array_rand($personagens);//retorna um valor aleatorio

echo "<div center><h1>$personagens[$aleatorio]</h1></div>";
?>

<style>
    [center] {
        display: flex;
        justify-content: center;
    }
</style>