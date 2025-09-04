<?php

require "../../../bootstrap.php";

$id = filter_input(INPUT_POST, 'id', FILTER_SANITIZE_NUMBER_INT);

if(isEmpty()) {
    flash('message','Preencha todos os campos!');
    return redirect('edit_user&id=' . $id);
}

$validate = validate([
    'name' => 's',
    'surname' => 'e',
    'email' => 'e'
]);

$atualizado = update('users', $validate, ['ID_USER', $id]);

if($atualizado) {
    flash('message','Atualizado com sucesso!', 'success');
    return redirect('edit_user&id=' . $id);
}

flash('message','Erro ao Atualizar!');
redirect('edit_user&id=' . $id);

?>