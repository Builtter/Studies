<div class="titulo">Função & Escopo</div>

<?php

function imprimirMernsagem()
{
    echo "Inhai" . "<br>";
    echo "Mensagem da funcao" . "<br>";
}

imprimirMernsagem();
imprimirMernsagem();
imprimirMernsagem();

$var = 1;
function trocaValor()
{
    $var = 2;
    echo "Dentro da func: $var <br>";
}

echo "Fora da func: $var <br>";
trocaValor();
echo "Fora da func: $var <br>";

function trocaValorGlobal()
{
    global $var;
    $var = 3;
    echo "Dentro da func: $var <br>";
}

echo "Fora da func: $var <br>";
trocaValorGlobal();
echo "Fora da func: $var <br>";