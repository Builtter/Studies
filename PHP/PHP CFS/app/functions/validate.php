<?php

function validate(array $fields){
    
    $validate = [];

    foreach ($fields as $field => $type) {
        switch ($type) {
            case 's':
                $validate[$field] = htmlspecialchars(strip_tags($_POST[$field]));
                break;
            case 'i':
                $validate[$field] = filter_var($_POST[$field], FILTER_SANITIZE_NUMBER_INT);
                break;
            case 'e':
                $validate[$field] = filter_var($_POST[$field], FILTER_SANITIZE_EMAIL);
                break;
        }
    }
    return (object) $validate;
}
