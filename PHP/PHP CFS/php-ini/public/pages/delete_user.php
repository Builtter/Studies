<?php
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);

$deletado = delete('users', 'ID_USER', $id);

if($deletado) {
    flash('message','Deletado com sucesso!', 'success');
    return redirectToHome();
}

flash('message','Erro ao Deletar!');
redirectToHome();

?>