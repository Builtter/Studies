<div class="titulo">Desafio Tabela</div>

<?php
    $matriz = [
        ['01', '02', '03', '04', '05'],
        ['06', '07', '08', '09', '10'],
        ['11', '12', '13', '14', '15'],
        ['16', '17', '18', '19', '20']
    ];

    echo "D1";
    echo "<br>";

    echo "<table>";
    foreach ($matriz as $linha) {
        echo "<tr>";
            foreach ($linha as $item) {
                echo "<td>$item</td>";
            }
        echo "</tr>";
    }
    echo "</table>";

    echo "<br>";
    echo "<hr>";
    echo "D2";
    echo "<br>";

    echo "<table>";
    foreach ($matriz as $key => $linha) {
        if ($key % 2 == 0) {
            echo "<tr class='bg-azul'>";
        }else{
            echo "<tr>";
        }
                foreach ($linha as $item) {
                    echo "<td>$item</td>";
                }
            echo "</tr>";
        }
    echo "</table>";
?>
<style>
    table {
        border: 1px solid #444;
        border-collapse: collapse;
        margin: 20px 0;
    }

    table tr{
        border:1px solid #444;
    }

    table td{
        padding: 10px 20px;
    }

    .bg-azul{
        background-color:rgb(102, 194, 194);
    }
    
</style>