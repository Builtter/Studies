<?php

function load(){
    $page = filter_input(INPUT_GET, 'page', FILTER_VALIDATE_REGEXP, array('options' => array('regexp' => '/^[a-zA-Z0-9_-]+$/')));
    $page = (!$page) ? 'pages/home.php' : 'pages/'. $page . '.php';

    if(!file_exists($page)){
        throw new Exception('Página não encontrada');
    }else{
        return $page;
    }
}