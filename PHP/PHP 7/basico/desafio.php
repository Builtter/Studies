<?php
$soma4 = 4 + 4;

function soma($a, $b)
{
    return $a + $b;
}
?>

<div class="titulo">Desafio</div>

<ul>
    <li>1 + 1 = <?= 2 ?></li>
    <li>4 + 4 = <?= $soma4; ?></li>
    <li>8 + 8 = <?= soma(8, 8); ?></li>
</ul>