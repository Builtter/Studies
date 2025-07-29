<?php

require "../../../bootstrap.php";

if(isEmpty()) {
    flash('message','Preencha todos os campos!');
    return redirect('contato');
}

$validate = validate([
    'name' => 's',
    'surname' => 'e',
    'email' => 'e',
    'password' => 's'
]);

$cadastrado = create('users', $validate);

if($cadastrado) {
    flash('message','Cadastrado com sucesso!', 'success');
    return redirect('create_user');
}else {
    flash('message','Erro ao cadastrar!');
    return redirect('create_user');
}

?>