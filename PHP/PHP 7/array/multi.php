<div class="titulo">Multidimensional</div>


<?php
$dados = [
    [//pos 0
        "nome" => "João",
        "idade" => 20,
        "altura" => 1.80
    ],
    [//pos 1
        "nome" => "joca",
        "idade" => 50,
        "altura" => 1.60
    ],
    [//pos 2
        "nome" => "Ana",
        "idade" => 12,
        "altura" => 1.32
    ]
];
print_r($dados);
// var_dump($dados);
echo '<br>';

echo '<br>' . $dados[0]["nome"];
echo '<br>' . $dados[1]["nome"];
echo '<br>' . $dados[2]["nome"];

echo '<br>';
$dados[2]["vizinho"] = "Braga";
echo '<br>';
print_r($dados[2]);