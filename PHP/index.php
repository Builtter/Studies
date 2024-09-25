<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Curso PHP</title>
    <link rel="stylesheet" href="assets/css/estilo.css">
</head>

<body>

    <header class="cabecalho">
        <h1>Curso de PHP</h1>
        <h2>Indicies</h2>
    </header>


    <main class="principal">

        <div class="conteudo">
            <nav class="modulos">
                <div class="modulo verde">
                    <h3>Módulo 01 - Básico</h3>
                    <ul>
                        <li><a href="exercicio.php?dir=basico&file=ola">Olá PHP</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    </main>
    <footer class="rodape">
        TEI GAMES <?= date('Y');?>
    </footer>

</body>

</html>