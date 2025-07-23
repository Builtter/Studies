<?php

/**
 * Dumps the given variable and ends the execution of the script.
 * Die Dump - dd
 * @param mixed $dump The variable to dump.
 */
function dd($dump){
    var_dump($dump);
    die();
}

/**
 * Returns the request data as array.
 *
 * @return array The request data as array.
 */
function request (){
    $request = $_SERVER['REQUEST_METHOD'];
    if ($request == 'POST') {
        return $_POST;
    }
    return $_GET;
}