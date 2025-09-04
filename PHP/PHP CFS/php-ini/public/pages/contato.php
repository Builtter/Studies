<h2>Página Contato</h2>

<?= get('message')?>

<form action="/pages/forms/contato.php" method="post" role="form">
    <legend>Contato</legend>

    <div class="form-group">
        <label for="" class="control-label">Nome</label>
        <input type="text" class="form-control" name="name" placeholder="Nome e Sobrenome" require>
    </div>

    <div class="form-group">
        <label for="" class="control-label">Email</label>
        <input type="email" class="form-control" name="email" placeholder="Email" require>
    </div>

    <div class="form-group">
        <label for="" class="control-label">Assunto</label>
        <input type="text" class="form-control" name="subject" placeholder="Assunto" require>
    </div>

    <div class="form-group">
        <label for="" class="control-label">Mensagem</label>
        <textarea class="form-control" rows="10" name="message"></textarea>
    </div>
    
    <button type="submit" class="btn btn-default">Enviar</button>
</form>