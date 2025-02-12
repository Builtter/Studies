<div class="titulo">Operadores Lógicos Desafio</div>


<form action="#" method="post">
    <div>
        <label for="trab1">Trabalho 1:</label>
        <select name="trab1" id="trab1">
            <option value="1">Concluído</option>
            <option value="0">Dispensado</option>
        </select>
    </div>
    <div>
        <label for="trab2">Trabalho 2:</label>
        <select name="trab2" id="trab2">
            <option value="1">Concluído</option>
            <option value="0">Dispensado</option>
        </select>
    </div>

    <button name ="enviar">Enviar</button>
</form>

<style>
    button,select{
        font-size: 1.8rem;
    }
</style>

<?php


if (isset($_POST['enviar'])) {
    $trab1 = $_POST['trab1'];
    $trab2 = $_POST['trab2'];
    
    
    if ($trab1 and $trab2) {
        echo "Sairemos para passear e comprar uma tv 50";
    } elseif ($trab1 or $trab2) {
        echo "Sairemos para passear e comprar uma tv 32";
    } 
    else {
        echo "Ficaremos em casa com a tv antiga";
    }
}
