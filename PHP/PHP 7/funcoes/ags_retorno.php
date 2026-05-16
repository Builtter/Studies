<div class="titulo">Args & Retorno</div>

<?php
function obterMensagem()
{
    return 'Retornando mensagems';
}

obterMensagem();
$mensagem = obterMensagem();
echo $mensagem . '<br>';

var_dump(obterMensagem());

echo '<br>';

function msgComNome($nome)
{
    return "Ola $nome" . '<br>';
}

echo msgComNome('João');

function soma($a, $b)
{
    return $a + $b . '<br>';
}

echo soma(1, 2);

$x = 10;
$y = 20;
echo soma($x, $y);


function trocaValor($a, $novoValor)
{
    return $a = $novoValor;
}

$var = 1;
trocaValor($var, 10);
echo $var . '<br>';


function trocaValorDeVerdade(&$a, $novoValor)
{
    return $a = $novoValor;
}
trocaValorDeVerdade($var, 10);
echo $var . '<br>';

