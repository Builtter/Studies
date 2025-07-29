<?php

require "../../../bootstrap.php";

if(isEmpty()) {
    flash('message','Preencha todos os campos!');
    return redirect('contato');
}

$validate = validate([
    'name' => 's',
    'email' => 'e',
    'subject' => 's',
    'message' => 's'
]);

$data = [
    "quem" => $validate->email,
    "para" => 'email@dominio.com',
    "assunto" => $validate->subject,
    "mensagem" => $validate->message
];

if(send($data)) {
    flash('message','Mensagem enviada com sucesso!','success');
    return redirect('contato');
}