<div class="titulo">Integração HTML</div>

<h1>
    <?php
        echo "Texto ";
        echo "<small>";
        echo "encaminhado ";
        echo "pelo ";
        echo "PHP ";
        echo "com ";
        echo "tag html!";
        echo "</small>";
    ?>
</h1>

<?= "<div> <small>Aqui também tem mais tags html " . "fon" . "</small></div>"?>

<div><button><?= "Botão PHP"?></button></div>