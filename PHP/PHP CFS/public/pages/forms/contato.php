<?php

require "../../../bootstrap.php";

if(isEmpty()) {
    flash('message','Preencha todos os campos!');

    // return redirect('?page=contato');
    header("location:/?page=contato");
}

$validate = [
    'name' => 's',
    'email' => 'e',
    'subject' => 's',
    'message' => 's'
];

$validate = validate($validate);


dd($validate->name);