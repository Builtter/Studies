<?php

require "../../../bootstrap.php";

$validate = [
    'name' => 's',
    'email' => 'e',
    'subject' => 's',
    'message' => 's'
];

$validate = validate($validate);


dd($validate->name);