<div class="titulo">$_POST</div>


<form action="#" method="post">
    <input type="text" name="nome">
    <input type="text" name="sobrenome">
    <select name="estado">
        <option value="SP">SP</option>
        <option value="RJ">RJ</option>
        <option value="MG">MG</option>
    </select>

    <button>Enviar</button><!-Button dentro de formulários atuamn como submit de dadios do fomulário-!>
</form>


<style>
    form > * {
        font-size: 1.8rem;
    }
</style>


<?php

print_r($_GET);
echo "<br>";
print_r($_POST);

echo "<br>" . count($_POST);//por se tratar de um array, podemos tratar com qualquer funcionalidade de arrays