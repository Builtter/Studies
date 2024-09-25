<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Exercicio</title>
    <link rel="stylesheet" href="assets/css/estilo.css">
    <link rel="stylesheet" href="assets/css/exercicio.css">

</head>

<body class="exercicio">

    <header class="cabecalho">
        <h1>Curso de PHP</h1>
        <h2>Visualização de Exercicios</h2>
    </header>

    <nav class="navegacao">
    <a href=<?= "/{$_GET['dir']}/{$_GET['file']}.php" ?> 
            class="verde">Sem formatação</a>
        <a href="index.php" class="vermelho">Voltar</a>
    </nav>

    <main class="principal">
        <div class="conteudo">

            <?php
                // include($_GET['dir'] . "/" . $_GET['file'] . "teste.php"); //não funfou
                // include("{$_GET['dir']}/{$_GET['file']}.php");//não funfou tmb
                // include(__DIR__ . "/{$_GET['dir']}/{$_GET['file']}.php");//não tmb
                // include('teste/teste.php'); // funfa
                include(__DIR__ . "/{$_GET['dir']}/{$_GET['file']}.php");
            ?>

        </div>
    </main>
    <footer class="rodape">
        TEI GAMES <?= date('Y');?>
    </footer>

</body>

</html>