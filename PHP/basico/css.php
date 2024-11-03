<div class="titulo">Integração CSS</div>

<h1 center>
    <?php
    echo "Texto \n";
    echo " <small>";
    echo " encaminhado ";
    echo " pelo ";
    echo " PHP ";
    echo " com ";
    echo " tag html!";
    echo "</small>";
    ?>
</h1>

<?= "<div center azul> <small>Aqui também tem mais tags html " . "fon" . "</small></div>" ?>

<div center dobro pt-3>
    <button>
        <?= "Botão PHP" ?>
    </button>
</div>

<style>
    button {
        padding: 5px <?= 2 * 10 ?>px; /* integrando conteúdo com php, funciona em um arquivo separado .css?? */
        background-color: #4285f4;
        color: #eee;
        font-weight: bold;
        border-radius: 10px;
    }

    [center]{
        display: flex;
        justify-content: center;
    }

    [azul]{
        color: #4285f4
    }

    [dobro]{
        font-size: 2rem;
    }
    [pt-3]{
        padding-top: 3rem;
    }
</style>