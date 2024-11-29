<div class="titulo">Desafio Meses</div>

<?php
//Trabalhoso mas que conseguimos alcançar o resultado que queremos
$meses = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", 
           "julho","agosto", "setembro", "outubro", "novembro", "dezembro"]; 

$mesesAjustrados = array();

for ($i; $i < count($meses); $i++) {
    $j++;
    $mesesAjustrados[$j] = ucfirst($meses[$i]);
}

print_r($mesesAjustrados);

echo "<br>";    

//fácil
$meses2 = [1 =>"janeiro", "fevereiro", "marco", "abril", "maio", "junho", 
           "julho","agosto", "setembro", "outubro", "novembro", "dezembro"]; 
//apenas numerar a primeira posição garante a ordem dos demais

print_r($meses2);