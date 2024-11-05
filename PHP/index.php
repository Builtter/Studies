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
                    <h3>Básico</h3>
                    <ul>
                        <li><a href="exercicio.php?dir=basico&file=ola">Olá PHP</a></li>
                        <li><a href="exercicio.php?dir=basico&file=html">Integração HTML</a></li>
                        <li><a href="exercicio.php?dir=basico&file=css">Integração CSS</a></li>
                        <li><a href="exercicio.php?dir=basico&file=comentarios">Comentários PHP</a></li>
                        <li><a href="exercicio.php?dir=basico&file=desafio">Desafio</a></li>
                    </ul>
                </div>
                <div class="modulo vermelho">
                    <h3>Tipos</h3>
                    <ul>
                        <li><a href="exercicio.php?dir=tipos&file=int">Tipo Interiro</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    </main>
    <footer class="rodape">
        FORGING SITES <?= date('Y');?>
    </footer>

</body>

</html>