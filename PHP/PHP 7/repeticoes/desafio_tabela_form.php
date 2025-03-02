<div class="titulo">Desafio Tabela Form</div>

<table>
    <?php
    $linhas = isset($_POST['linhas']) ? intval($_POST['linhas']) : 0;
    $colunas = isset($_POST['colunas']) ? intval($_POST['colunas']) : 0;

    if (isset($_POST['enviar'])){
        $mostrador = 0;
        if ($linhas> 0 && $colunas >0){
            for ($i=0; $i<$linhas; $i++){
                echo "<tr>";
                    for ($j=0; $j<$colunas;$j++){
                        echo "<td>$mostrador</td>";
                        $mostrador++;
                    }
                echo "</tr>";
            }
        } else{
            echo "A quantidade de linhas e colunas deve ser maior que zero!";
        };
    };
    ?>
</table>

<div class="form-table">
    <div class="content">
        <form id="form-table" method="post" action="#">
            <div class="linhas">
                <label for="linhas">Informe a quantidade de linhas:</label>
                <input type="number" id="linhas" name="linhas" value="<?= $linhas ?>">
            </div>

            <div class="colunas">
                <label for="colunas">Informe a quantidade de colunas:</label>
                <input type="number" id="colunas" name="colunas" value="<?= $colunas ?>">
            </div>

            <button type="submit" name="enviar">Enviar</button>
        </form>
    </div>
</div>

<style>
    table {
        border: 1px solid #444;
        border-collapse: collapse;
        margin: 20px 0;
    }

    table tr {
        border: 1px solid #444;
    }

    table td {
        padding: 10px 20px;
    }

    .bg-azul {
        background-color: rgb(102, 194, 194);
    }
    .form-table {
        margin: 20px;
    }
    .content{
        display: flex;
        flex-direction: column;
        gap:10px;
    }

    button{
        width: 150px;
        height: 30px;
        border: 1px solid black;
        background-color: #ccc;
    }
    input{
        width: 200px;
        height: 30px;
        border: 1px solid black;
    }
</style>